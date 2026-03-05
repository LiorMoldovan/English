// Backend tests for api/sync.js
// Run with: node tests/api-sync.test.js

let passed = 0, failed = 0;
function assert(condition, name) {
  if (condition) { passed++; console.log(`  PASS: ${name}`); }
  else { failed++; console.error(`  FAIL: ${name}`); }
}

// Mock fetch
let fetchCalls = [];
let fetchResponses = [];
function mockFetch(url, opts) {
  fetchCalls.push({ url, opts });
  const response = fetchResponses.shift() || { ok: true, status: 200, json: async () => ({}), headers: new Map() };
  return Promise.resolve(response);
}
global.fetch = mockFetch;

function makeHeaders(obj) {
  return { get: (k) => obj[k] || null };
}

function resetMocks() {
  fetchCalls = [];
  fetchResponses = [];
}

function makeReq(method, query = {}, body = null) {
  return { method, query, body };
}

function makeRes() {
  const res = {
    _status: 200, _json: null,
    status(code) { res._status = code; return res; },
    json(data) { res._json = data; return res; }
  };
  return res;
}

// Load handler using dynamic import workaround
const fs = require('fs');
let handlerSource = fs.readFileSync('api/sync.js', 'utf8');
handlerSource = handlerSource.replace('export default async function handler', 'async function handler');
handlerSource += '\nmodule.exports = handler;';
const tempPath = require('path').join(__dirname, '_sync_temp.js');
fs.writeFileSync(tempPath, handlerSource);
const handler = require(tempPath);

async function runTests() {

  // ===== TEST 1: POST creates blob =====
  console.log('\n=== TEST 1: POST creates blob ===');
  resetMocks();
  fetchResponses.push({
    ok: true, status: 201,
    json: async () => ({}),
    headers: makeHeaders({ 'Location': 'https://jsonblob.com/api/jsonBlob/abc123', 'X-jsonblob-id': 'abc123' })
  });
  const req1 = makeReq('POST', {}, { test: 'data' });
  const res1 = makeRes();
  await handler(req1, res1);
  assert(res1._status === 201, 'POST returns 201');
  assert(res1._json && res1._json.id === 'abc123', 'POST returns blob id from X-jsonblob-id');
  assert(fetchCalls.length === 1, 'POST makes 1 fetch call');
  assert(fetchCalls[0].opts.method === 'POST', 'POST fetch uses POST method');

  // ===== TEST 2: POST uses Location header fallback =====
  console.log('\n=== TEST 2: POST Location fallback ===');
  resetMocks();
  fetchResponses.push({
    ok: true, status: 201,
    json: async () => ({}),
    headers: makeHeaders({ 'Location': 'https://jsonblob.com/api/jsonBlob/loc456', 'X-jsonblob-id': '' })
  });
  const req2 = makeReq('POST', {}, { hello: 'world' });
  const res2 = makeRes();
  await handler(req2, res2);
  assert(res2._json.id === 'loc456', 'POST falls back to Location header');

  // ===== TEST 3: POST upstream failure =====
  console.log('\n=== TEST 3: POST upstream failure ===');
  resetMocks();
  fetchResponses.push({
    ok: false, status: 500,
    json: async () => ({}),
    headers: makeHeaders({})
  });
  const req3 = makeReq('POST', {}, { data: 1 });
  const res3 = makeRes();
  await handler(req3, res3);
  assert(res3._status === 502, 'POST returns 502 on upstream failure');
  assert(res3._json.error === 'upstream', 'POST returns upstream error');

  // ===== TEST 4: GET with id =====
  console.log('\n=== TEST 4: GET with id ===');
  resetMocks();
  const testData = { xp: 100, level: 5 };
  fetchResponses.push({
    ok: true, status: 200,
    json: async () => testData,
    headers: makeHeaders({})
  });
  const req4 = makeReq('GET', { id: 'blob789' });
  const res4 = makeRes();
  await handler(req4, res4);
  assert(res4._status === 200, 'GET returns 200');
  assert(res4._json.xp === 100, 'GET returns correct data');
  assert(fetchCalls[0].url.includes('blob789'), 'GET fetches correct blob id');

  // ===== TEST 5: GET not found =====
  console.log('\n=== TEST 5: GET not found ===');
  resetMocks();
  fetchResponses.push({
    ok: false, status: 404,
    json: async () => ({}),
    headers: makeHeaders({})
  });
  const req5 = makeReq('GET', { id: 'notexist' });
  const res5 = makeRes();
  await handler(req5, res5);
  assert(res5._status === 404, 'GET returns 404 for missing blob');
  assert(res5._json.error === 'not found', 'GET returns not found error');

  // ===== TEST 6: PUT with id =====
  console.log('\n=== TEST 6: PUT with id ===');
  resetMocks();
  fetchResponses.push({
    ok: true, status: 200,
    json: async () => ({}),
    headers: makeHeaders({})
  });
  const req6 = makeReq('PUT', { id: 'upd123' }, { updated: true });
  const res6 = makeRes();
  await handler(req6, res6);
  assert(res6._status === 200, 'PUT returns 200');
  assert(res6._json.ok === true, 'PUT returns ok');
  assert(fetchCalls[0].url.includes('upd123'), 'PUT calls correct URL');
  assert(fetchCalls[0].opts.method === 'PUT', 'PUT fetch uses PUT method');

  // ===== TEST 7: PUT without id =====
  console.log('\n=== TEST 7: PUT without id ===');
  resetMocks();
  const req7 = makeReq('PUT', {}, { data: 1 });
  const res7 = makeRes();
  await handler(req7, res7);
  assert(res7._status === 400, 'PUT without id returns 400');
  assert(res7._json.error === 'bad request', 'PUT without id returns bad request');

  // ===== TEST 8: GET without id =====
  console.log('\n=== TEST 8: GET without id ===');
  resetMocks();
  const req8 = makeReq('GET', {});
  const res8 = makeRes();
  await handler(req8, res8);
  assert(res8._status === 400, 'GET without id returns 400');

  // ===== TEST 9: Unsupported method =====
  console.log('\n=== TEST 9: DELETE returns 400 ===');
  resetMocks();
  const req9 = makeReq('DELETE', { id: 'abc' });
  const res9 = makeRes();
  await handler(req9, res9);
  assert(res9._status === 400, 'DELETE returns 400');

  // ===== TEST 10: Network error returns 500 =====
  console.log('\n=== TEST 10: Network error ===');
  resetMocks();
  global.fetch = () => Promise.reject(new Error('network fail'));
  const req10 = makeReq('POST', {}, { data: 1 });
  const res10 = makeRes();
  await handler(req10, res10);
  assert(res10._status === 500, 'Network error returns 500');
  assert(res10._json.error === 'internal', 'Network error returns internal');
  global.fetch = mockFetch;

  // ===== TEST 11: POST sends correct Content-Type =====
  console.log('\n=== TEST 11: POST Content-Type ===');
  resetMocks();
  fetchResponses.push({
    ok: true, status: 201,
    json: async () => ({}),
    headers: makeHeaders({ 'X-jsonblob-id': 'ct1' })
  });
  const req11 = makeReq('POST', {}, { foo: 'bar' });
  const res11 = makeRes();
  await handler(req11, res11);
  assert(fetchCalls[0].opts.headers['Content-Type'] === 'application/json', 'POST sends application/json');

  // ===== TEST 12: POST body is JSON stringified =====
  console.log('\n=== TEST 12: POST body serialization ===');
  resetMocks();
  fetchResponses.push({
    ok: true, status: 201,
    json: async () => ({}),
    headers: makeHeaders({ 'X-jsonblob-id': 'ser1' })
  });
  const bodyObj = { level: 5, words: ['hello'] };
  const req12 = makeReq('POST', {}, bodyObj);
  const res12 = makeRes();
  await handler(req12, res12);
  const sentBody = JSON.parse(fetchCalls[0].opts.body);
  assert(sentBody.level === 5, 'POST body correctly serialized');
  assert(Array.isArray(sentBody.words), 'POST body arrays preserved');

  // Cleanup
  try { fs.unlinkSync(tempPath); } catch(e) {}

  // ===== SUMMARY =====
  console.log('\n=============================');
  console.log(`API SYNC RESULTS: ${passed} passed, ${failed} failed out of ${passed + failed} tests`);
  console.log('=============================');
  process.exit(failed > 0 ? 1 : 0);
}

runTests().catch(e => {
  console.error('Test runner error:', e);
  try { fs.unlinkSync(tempPath); } catch(e2) {}
  process.exit(1);
});

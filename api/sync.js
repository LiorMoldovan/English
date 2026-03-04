const BASE = 'https://jsonblob.com/api/jsonBlob';

export default async function handler(req, res) {
  const { method } = req;
  const id = req.query.id;

  try {
    if (method === 'POST') {
      const resp = await fetch(BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
      });
      if (!resp.ok) return res.status(502).json({ error: 'upstream' });
      const loc = resp.headers.get('Location') || '';
      const xId = resp.headers.get('X-jsonblob-id') || '';
      const blobId = xId || loc.split('/').pop();
      return res.status(201).json({ id: blobId });
    }

    if (method === 'PUT' && id) {
      await fetch(`${BASE}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
      });
      return res.json({ ok: true });
    }

    if (method === 'GET' && id) {
      const resp = await fetch(`${BASE}/${id}`);
      if (!resp.ok) return res.status(resp.status).json({ error: 'not found' });
      const data = await resp.json();
      return res.json(data);
    }

    res.status(400).json({ error: 'bad request' });
  } catch (e) {
    res.status(500).json({ error: 'internal' });
  }
}

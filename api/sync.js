const REPO = 'LiorMoldovan/English';
const BRANCH = 'main';
const GH_API = 'https://api.github.com';

function filePath(id) {
  return `data/sync-${id}.json`;
}

function isValidId(id) {
  return /^[a-zA-Z0-9_-]{4,64}$/.test(id);
}

async function getFile(token, path) {
  const resp = await fetch(`${GH_API}/repos/${REPO}/contents/${path}?ref=${BRANCH}`, {
    headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github.v3+json' }
  });
  if (!resp.ok) return null;
  return await resp.json();
}

export default async function handler(req, res) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return res.status(500).json({ error: 'GITHUB_TOKEN not configured' });

  const { method } = req;
  const id = req.query.id;

  if (!id || !isValidId(id)) {
    return res.status(400).json({ error: 'missing or invalid id parameter' });
  }

  const path = filePath(id);

  try {
    if (method === 'GET') {
      const file = await getFile(token, path);
      if (!file || !file.content) return res.status(404).json({ error: 'not found' });
      const decoded = Buffer.from(file.content, 'base64').toString('utf-8');
      return res.json(JSON.parse(decoded));
    }

    if (method === 'PUT' || method === 'POST') {
      const file = await getFile(token, path);
      const content = Buffer.from(JSON.stringify(req.body)).toString('base64');
      const body = {
        message: `sync: update ${id}`,
        content,
        branch: BRANCH
      };
      if (file && file.sha) body.sha = file.sha;

      const resp = await fetch(`${GH_API}/repos/${REPO}/contents/${path}`, {
        method: 'PUT',
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      if (!resp.ok) {
        const err = await resp.text();
        return res.status(502).json({ error: 'github write failed', detail: err });
      }
      return res.json({ ok: true });
    }

    res.status(400).json({ error: 'bad request' });
  } catch (e) {
    res.status(500).json({ error: 'internal', message: e.message });
  }
}

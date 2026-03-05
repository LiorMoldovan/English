const REPO = 'LiorMoldovan/English';
const FILE_PATH = 'data/sync.json';
const BRANCH = 'main';
const GH_API = 'https://api.github.com';

async function getFile(token) {
  const resp = await fetch(`${GH_API}/repos/${REPO}/contents/${FILE_PATH}?ref=${BRANCH}`, {
    headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github.v3+json' }
  });
  if (!resp.ok) return null;
  return await resp.json();
}

export default async function handler(req, res) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return res.status(500).json({ error: 'GITHUB_TOKEN not configured' });

  const { method } = req;

  try {
    if (method === 'GET') {
      const file = await getFile(token);
      if (!file || !file.content) return res.status(404).json({ error: 'not found' });
      const decoded = Buffer.from(file.content, 'base64').toString('utf-8');
      return res.json(JSON.parse(decoded));
    }

    if (method === 'PUT' || method === 'POST') {
      const file = await getFile(token);
      const content = Buffer.from(JSON.stringify(req.body)).toString('base64');
      const body = {
        message: 'sync: update progress data',
        content,
        branch: BRANCH
      };
      if (file && file.sha) body.sha = file.sha;

      const resp = await fetch(`${GH_API}/repos/${REPO}/contents/${FILE_PATH}`, {
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

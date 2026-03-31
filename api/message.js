export default async function handler(req, res) {
  const { id, mailbox } = req.query;

  if (!id || !mailbox) {
    return res.status(400).json({ error: "Missing id or mailbox" });
  }

  const url = `https://api.catchmail.io/api/v1/message/${id}?mailbox=${encodeURIComponent(mailbox)}`;

  try {
    const r = await fetch(url);
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

export default function handler(req, res) {
  const { postId } = req.query;

  res.end(`Post: ${postId}`);
}

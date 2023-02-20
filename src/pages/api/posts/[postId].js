export default async function handler(req, res) {
  const { postId } = req.query;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await response.json();
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

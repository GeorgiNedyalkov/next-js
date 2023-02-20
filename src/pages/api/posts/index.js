export default function handler(req, res) {
  res.status(200).json({
    author: "Georgi",
    message: "Hi there",
  });
}

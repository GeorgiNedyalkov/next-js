export default function handler(req, res) {
  res.status(200).json({ message: "Hello, api routes!" });

  if (req.method === "POST") {
    // Process a post request
  } else {
    // handle any other methods
  }
}

import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  // send a simple json response
  res.json({ message: "Hello from Bun & Express!" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

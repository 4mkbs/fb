const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 7000;

// Middleware to parse JSON bodies

// Sample route
app.get("/", (req, res) => {
  res.send({ message: "Hello from the backend!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const express = require("express");
const app = express();

const healthRoute = require("./routes/health");

app.use("/health", healthRoute);

app.get("/", (req, res) => {
  res.json({ message: "CI/CD Pipeline Running 🚀" });
});

module.exports = app;
// dev change

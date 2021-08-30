const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page....");
});

app.get("/about", (req, res) => {
  res.send("About Page....");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server active on port ${PORT} :) `);
});
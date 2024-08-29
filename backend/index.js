const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi there backend!");
});
app.listen(5000, () => {
  console.log("working!");
});

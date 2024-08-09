require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/Linked-in", (req, res) => {
  res.send("Hello World! Sahiljarngal");
});
app.get("/youtube", (req, res) => {
  res.send("<h3>Sahil Jangral!</h3>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

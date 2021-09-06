const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.all("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/html/index.html"));
});

app.all("/web.js", (req, res) => {
  res.sendFile(path.join(__dirname + "/html/web.js"));
});

app.all("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/html/style.css"));
});

app.listen(8080, () => console.log("Calculator ready!"));

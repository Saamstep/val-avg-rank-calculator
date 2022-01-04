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

app.all("/PEL.ico", (req, res) => {
  res.sendFile(path.join(__dirname + "/PEL.ico"));
});

app.listen(8888, () => console.log("Calculator ready!\n\nLive at localhost:8888"));

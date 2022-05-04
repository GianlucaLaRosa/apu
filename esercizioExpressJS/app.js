const express = require("express");
const bodyParser = require("body-parser");
var path = require("path");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));
const port = 3000;

const fs = require("fs");

let rawdata = fs.readFileSync("users.json");
let users = JSON.parse(rawdata);
let isLoggedin = false;

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "." });
});

app.get("/form", (req, res) => {
  res.sendFile("form.html", { root: "." });
});

app.post("/form", (req, res) => {
  res.sendFile("index.html", { root: "." });
  let formInputs = {
    cognome: req.body.surname,
    nome: req.body.name,
    piva: req.body.piva,
  };
  console.log(formInputs);
});

app.get("/login", (req, res) => {
  res.sendFile("login.html", { root: "." });
});

app.post("/login", (req, res) => {
  if (req.body.id === users.userName && req.body.password === users.password) {
    isLoggedin = true;
    res.sendFile("logged.html", { root: "." });
  } else {
    res.sendFile("index.html", { root: "." });
  }
});

app.get("/logged", (req, res) => {
  if (isLoggedin) {
    res.sendFile("logged.html", { root: "." });
  } else {
    res.sendFile("index.html", { root: "." });
  }
});

app.post("/logged", (req, res) => {
  isLoggedin = false;
  res.sendFile("index.html", { root: "." });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const cors = require("cors");
const asyncify = require("express-asyncify");
const routes = require("./src/routes");
require("./src/config/connection");
const app = asyncify(express());
app.use(express.json());
const port = 3000;

app.use(cors());

app.use(routes);

app.get("/", (req, res) => {
  return res.json({ status: "OK", version: 1 });
});

app.listen(port, () => {
  console.log(`Servidor Web está no ar ${port}!`);
});

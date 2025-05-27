const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ name: "kalanithimaran" });
});

app.post("/", (req, res) => {
  res.send(`User added successfully`);
});

app.delete("/", (req, res) => {
  res.send(`User deleted successfully`);
});

app.listen(3000, () => {
  console.log(`Express server is listening 3000 port`);
});

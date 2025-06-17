const express = require("express");
const { auth } = require("./middlewares/auth");

const app = express();

app.get("/students", auth, [
  ((req, res, next) => {
    next();
    console.log("first");
  },
  [
    (req, res, next) => {
      next();
    },
  ]),
]);


app.get("/students", (req, res) => {
  console.log("second");
  res.json([
    { id: 1, name: "Arun" },
    { id: 2, name: "Divya" },
  ]);
});

app.delete("/", (req, res) => {
  res.send(`User deleted successfully`);
});

app.listen(3000, () => {
  console.log(`Express server is listening 3000 port`);
});

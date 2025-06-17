const express = require("express");

const app = express();

app.get(
  "/students",
  [(req, res, next) => {
    next();
    console.log("first")
  },[(req, res, next) => {
    // next();
    console.log("second")
    res.send('Hi');
  }]]
);
app.get(
  "/students",
  (req, res) => {
      console.log("second");
      res.json([
        { id: 1, name: "Arun" },
        { id: 2, name: "Divya" },
      ]);
    }
);

app.delete("/", (req, res) => {
  res.send(`User deleted successfully`);
});

app.listen(3000, () => {
  console.log(`Express server is listening 3000 port`);
});

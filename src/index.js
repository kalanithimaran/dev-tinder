const express = require("express");

const app = express();

app.use("/", (req, res) => {
    res.send(`Welcome to DevTinder`);
});

app.listen(3000, () => {
  console.log(`Express server is listening 3000 port`);
});

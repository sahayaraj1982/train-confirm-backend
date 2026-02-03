const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/check", (req, res) => {
  res.json({
    train: "PANDIAN",
    status: "CONFIRM",
    seats: 8
  });
});

app.listen(PORT);
3000

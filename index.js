const express = require("express");
const app = express();

app.get("/check", (req, res) => {
  res.json({
    train: "PANDIAN EXPRESS",
    quota: "TATKAL",
    class: "3A",
    availability: "CONFIRM",
    seats: 8
  });
});

app.listen(3000);

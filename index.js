const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/search", (req, res) => {
  res.json({
    train: "PANDIAN",
    status: "CONFIRM",
    class: "3A",
    seats: 8
  });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

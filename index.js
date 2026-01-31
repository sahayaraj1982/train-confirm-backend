const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Train Confirm Backend is LIVE 🚆");
});

app.get("/trains", (req, res) => {
  res.json([
    { trainNo: "20601", name: "Vande Bharat", class: "CC", availability: "CONFIRM" },
    { trainNo: "12636", name: "Vaigai SF", class: "3A", availability: "RAC" },
    { trainNo: "12638", name: "Pandian SF", class: "SL", availability: "WL" }
  ]);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

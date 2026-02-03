const express = require("express");
const app = express();

/*
  API PURPOSE:
  - Date
  - From
  - To
  - Show ONLY trains with CONFIRM availability
  - Include General / Tatkal / Premium Tatkal
*/

app.get("/", (req, res) => {
  res.json({
    status: "API is running",
    use: "/api/confirm"
  });
});

app.get("/api/confirm", (req, res) => {
  res.json({
    date: "03-02-2026",
    from: "MADURAI",
    to: "CHENNAI",
    result: [
      {
        trainNo: "12638",
        trainName: "PANDIAN EXPRESS",
        quota: "TATKAL",
        class: "3A",
        availability: "CONFIRM",
        seatsAvailable: 8
      }
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

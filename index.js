const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

/*
INPUT:
- date
- from
- to

RULE:
- ONLY CONFIRM tickets
- Show CURRENT AVAILABILITY
- WL / RAC / others HIDE
*/

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/search", (req, res) => {
  // demo data (IRCTC-like)
  const trains = [
    {
      trainName: "PANDIAN EXPRESS",
      trainNo: "12638",
      quota: "TATKAL",
      class: "3A",
      status: "CONFIRM",
      currentAvailability: "AVAILABLE",
      seatsAvailable: 8
    },
    {
      trainName: "VAIGAI EXPRESS",
      trainNo: "12636",
      quota: "GENERAL",
      class: "SL",
      status: "WL",
      currentAvailability: "WL 12",
      seatsAvailable: 0
    }
  ];

  // ONLY CONFIRM
  const result = trains.filter(t => t.status === "CONFIRM");

  res.json({
    date: req.query.date || "",
    from: req.query.from || "",
    to: req.query.to || "",
    result
  });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

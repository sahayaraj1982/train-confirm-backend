const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/search", (req, res) => {
  // Demo IRCTC-like data
  const trains = [
    {
      trainName: "PANDIAN EXPRESS",
      trainNo: "12638",
      quota: "GENERAL",
      class: "3A",
      status: "CONFIRM",
      currentAvailability: "AVAILABLE",
      seatsAvailable: 6
    },
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
      trainName: "PANDIAN EXPRESS",
      trainNo: "12638",
      quota: "PREMIUM TATKAL",
      class: "3A",
      status: "WL",
      currentAvailability: "WL 5",
      seatsAvailable: 0
    },
    {
      trainName: "PANDIAN EXPRESS",
      trainNo: "12638",
      quota: "LADIES",
      class: "SL",
      status: "CONFIRM",
      currentAvailability: "AVAILABLE",
      seatsAvailable: 2
    },
    {
      trainName: "PANDIAN EXPRESS",
      trainNo: "12638",
      quota: "SENIOR CITIZEN",
      class: "2A",
      status: "CONFIRM",
      currentAvailability: "AVAILABLE",
      seatsAvailable: 1
    }
  ];

  // CONFIRM ONLY filter
  const result = trains.filter(t => t.status === "CONFIRM");

  res.json({
    date: req.query.date || "",
    from: req.query.from || "",
    to: req.query.to || "",
    result
  });
});

app.listen(PORT);

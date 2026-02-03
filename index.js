const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/search", (req, res) => {
  // Demo data (IRCTC-like)
  const data = {
    date: req.query.date || "",
    from: req.query.from || "",
    to: req.query.to || "",
    train: {
      name: "PANDIAN EXPRESS",
      number: "12638",
      class: "3A",
      quotas: [
        {
          quota: "GENERAL",
          currentAvailability: "AVAILABLE",
          seatsAvailable: 6,
          status: "CONFIRM"
        },
        {
          quota: "TATKAL",
          currentAvailability: "AVAILABLE",
          seatsAvailable: 8,
          status: "CONFIRM"
        },
        {
          quota: "PREMIUM TATKAL",
          currentAvailability: "AVAILABLE",
          seatsAvailable: 2,
          status: "CONFIRM"
        },
        {
          quota: "LADIES",
          currentAvailability: "AVAILABLE",
          seatsAvailable: 2,
          status: "CONFIRM"
        },
        {
          quota: "SENIOR CITIZEN",
          currentAvailability: "AVAILABLE",
          seatsAvailable: 1,
          status: "CONFIRM"
        }
      ]
    }
  };

  // CONFIRM ONLY (safety filter)
  data.train.quotas = data.train.quotas.filter(
    q => q.status === "CONFIRM"
  );

  res.json(data);
});

app.listen(PORT);

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// MAIN CHECK ROUTE
app.get("/check", (req, res) => {
  const { date, from, to } = req.query;

  if (!date || !from || !to) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  res.json({
    date,
    from: from.toUpperCase(),
    to: to.toUpperCase(),
    train: {
      name: "PANDIAN EXPRESS",
      number: "12638",
      class: "3A",
      quotas: [
        { quota: "GENERAL", currentAvailability: "AVAILABLE", seatsAvailable: 6, status: "CONFIRM" },
        { quota: "TATKAL", currentAvailability: "AVAILABLE", seatsAvailable: 8, status: "CONFIRM" },
        { quota: "PREMIUM TATKAL", currentAvailability: "AVAILABLE", seatsAvailable: 2, status: "CONFIRM" },
        { quota: "LADIES", currentAvailability: "AVAILABLE", seatsAvailable: 2, status: "CONFIRM" },
        { quota: "SENIOR CITIZEN", currentAvailability: "AVAILABLE", seatsAvailable: 1, status: "CONFIRM" }
      ]
    }
  });
});

// ⭐⭐⭐ VERY IMPORTANT ⭐⭐⭐
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

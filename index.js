const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ✅ Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// ✅ Search API (IRCTC API key ready structure)
app.get("/search", async (req, res) => {
  const { date, from, to } = req.query;

  if (!date || !from || !to) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  // 🔹 TEMP SAMPLE RESPONSE (IRCTC API replace here)
  res.json({
    date,
    from,
    to,
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

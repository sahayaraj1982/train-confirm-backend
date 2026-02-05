const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// IMPORTANT: POST /check (this MUST exist)
app.post("/check", (req, res) => {
  const { date, from, to } = req.body;

  if (!date || !from || !to) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // Mock response (stable)
  res.json({
    date,
    from,
    to,
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
        }
      ]
    }
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

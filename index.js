const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"]
}));

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.get("/search", (req, res) => {
  const { date, from, to } = req.query;

  if (!date || !from || !to) {
    return res.status(400).json({ error: "Missing parameters" });
  }

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

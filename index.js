const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.post("/search", (req, res) => {
  const { date, from, to } = req.body;

  if (!date || !from || !to) {
    return res.status(400).json({ error: "Missing fields" });
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
        }
      ]
    }
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

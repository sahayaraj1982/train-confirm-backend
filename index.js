const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// HEALTH CHECK
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// SEARCH – CONFIRM TICKET ONLY
app.get("/search", async (req, res) => {
  try {
    const { date, from, to } = req.query;

    if (!date || !from || !to) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    const response = await axios.get(
      process.env.IRCTC_API_URL,
      {
        headers: {
          "Authorization": `Bearer ${process.env.IRCTC_API_KEY}`,
          "Accept": "application/json"
        },
        params: {
          date,
          from,
          to
        }
      }
    );

    // FILTER – CONFIRM ONLY
    const confirmTrains = response.data.trains.filter(
      t => t.status === "CONFIRM"
    );

    res.json({
      date,
      from,
      to,
      results: confirmTrains
    });

  } catch (err) {
    res.status(500).json({
      error: "IRCTC API error",
      details: err.message
    });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

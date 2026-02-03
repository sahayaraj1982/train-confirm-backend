const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

/*
MOCK REAL-LIKE ENGINE
RULES:
- Date / From / To based
- Quota-wise current availability
- CONFIRM tickets ONLY
*/

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/search", (req, res) => {
  const { date, from, to } = req.query;

  // Base mock availability logic (simple + stable)
  const baseSeats = (date && date.endsWith("5")) ? 4 : 8;

  const response = {
    date: date || "",
    from: from || "",
    to: to || "",
    train: {
      name: "PANDIAN EXPRESS",
      number: "12638",
      class: "3A",
      quotas: [
        {
          quota: "GENERAL",
          status: "CONFIRM",
          currentAvailability: "AVAILABLE",
          seatsAvailable: baseSeats
        },
        {
          quota: "TATKAL",
          status: "CONFIRM",
          currentAvailability: "AVAILABLE",
          seatsAvailable: baseSeats - 2
        },
        {
          quota: "PREMIUM TATKAL",
          status: "CONFIRM",
          currentAvailability: "AVAILABLE",
          seatsAvailable: baseSeats - 3
        },
        {
          quota: "LADIES",
          status: "CONFIRM",
          currentAvailability: "AVAILABLE",
          seatsAvailable: 2
        },
        {
          quota: "SENIOR CITIZEN",
          status: "CONFIRM",
          currentAvailability: "AVAILABLE",
          seatsAvailable: 1
        }
      ]
    }
  };

  // Safety filter: CONFIRM only
  response.train.quotas = response.train.quotas.filter(
    q => q.status === "CONFIRM" && q.seatsAvailable > 0
  );

  res.json(response);
});

app.listen(PORT, () => {
  console.log("Mock engine running on port " + PORT);
});

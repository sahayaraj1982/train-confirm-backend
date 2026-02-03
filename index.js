const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

/*
RULE:
- CONFIRM ticket உள்ள trains மட்டும் காட்ட வேண்டும்
- WL / RAC / NA எதுவும் காட்டக்கூடாது
*/

app.post("/search", (req, res) => {
  const { date, from, to } = req.body;

  const trains = [
    {
      trainName: "PANDIAN EXPRESS",
      quota: "TATKAL",
      class: "3A",
      status: "CONFIRM",
      availableSeats: 8
    },
    {
      trainName: "VAIGAI EXPRESS",
      quota: "GENERAL",
      class: "3A",
      status: "WL",
      availableSeats: 0
    }
  ];

  // ONLY CONFIRM
  const result = trains.filter(t => t.status === "CONFIRM");

  res.json({
    date,
    from,
    to,
    result
  });
});

// ROOT CHECK
app.get("/", (req, res) => {
  res.json({ status: "API RUNNING" });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

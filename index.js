const express = require("express");
const app = express();

app.use(express.json());

// SEARCH CONFIRM TICKETS ONLY
app.post("/search", (req, res) => {
  const { date, from, to, quota, classType } = req.body;

  // SAMPLE TRAIN DATA
  const allTrains = [
    {
      trainName: "PANDIAN EXPRESS",
      quota: "TATKAL",
      class: "3A",
      availability: "CONFIRM",
      availableSeats: 8
    },
    {
      trainName: "VAIGAI EXPRESS",
      quota: "TATKAL",
      class: "3A",
      availability: "RAC",
      availableSeats: 2
    },
    {
      trainName: "VANDE BHARAT",
      quota: "GENERAL",
      class: "CC",
      availability: "WL",
      availableSeats: 0
    }
  ];

  // 🔥 ONLY CONFIRM FILTER
  const confirmTrains = allTrains.filter(
    t => t.availability === "CONFIRM"
  );

  res.json({
    date,
    from,
    to,
    quota,
    classType,
    result: confirmTrains
  });
});

// ROOT CHECK
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Confirm Ticket API Working"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

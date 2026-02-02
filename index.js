const express = require("express");
const app = express();

app.use(express.json());

// MAIN SEARCH API
app.post("/search", (req, res) => {
  const { date, from, to, quota, classType } = req.body;

  // SAMPLE DATA (demo purpose)
  const trains = [
    {
      trainName: "PANDIAN EXPRESS",
      quota: "TATKAL",
      class: "3A",
      availability: "CONFIRM",
      availableSeats: 8
    }
  ];

  res.json({
    date,
    from,
    to,
    result: trains
  });
});

// ROOT CHECK
app.get("/", (req, res) => {
  res.json({
    status: "API WORKING",
    message: "Train Confirm Backend Live"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

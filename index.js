const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

/*
FINAL LOGIC:
- General / Tatkal / Premium Tatkal
- currentAvailability > 0 மட்டும் SHOW
- WL / 0 / NA → HIDE
*/

app.get("/search", (req, res) => {
  const allData = [
    {
      train: "PANDIAN EXPRESS",
      quota: "TATKAL",
      class: "3A AC",
      currentAvailability: 8,
      status: "CONFIRM"
    },
    {
      train: "VAIGAI EXPRESS",
      quota: "GENERAL",
      class: "3A AC",
      currentAvailability: 0,
      status: "WL"
    },
    {
      train: "NELLAI EXPRESS",
      quota: "PREMIUM TATKAL",
      class: "3A AC",
      currentAvailability: 0,
      status: "NA"
    }
  ];

  // ONLY AVAILABLE (currentAvailability > 0)
  const visibleResults = allData.filter(
    item => item.currentAvailability > 0
  );

  res.json(visibleResults);
});

// Root check
app.get("/", (req, res) => {
  res.send("Train Confirm Backend LIVE");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

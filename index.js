const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

/*
status query:
CONFIRM | RAC | WL
example:
 /check?status=CONFIRM
*/

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/check", (req, res) => {
  const { status } = req.query;

  // demo data (IRCTC style)
  const trains = [
    { train: "PANDIAN", class: "3A", status: "CONFIRM", seats: 8 },
    { train: "VAIGAI", class: "SL", status: "RAC", seats: 4 },
    { train: "NELLai", class: "2A", status: "WL", seats: 12 }
  ];

  if (!status) {
    return res.json(trains);
  }

  const filtered = trains.filter(
    t => t.status === status.toUpperCase()
  );

  res.json(filtered);
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

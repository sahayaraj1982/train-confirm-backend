const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is running OK 🚀");
});

app.get("/test", (req, res) => {
  res.json({
    status: "success",
    message: "Test API working 🚀"
  });
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
app.get("/status", (req, res) => {
  res.json({ status: "OK" });
});
app.get("/tatkal", (req, res) => {
  res.json({
    type: "Tatkal / Premium Tatkal",
    status: "Available",
    note: "Sample Tatkal API working"
  });
});
app.get("/trains", (req, res) => {
  res.json([
    { trainNo: "20601", name: "Vande Bharat", class: "CC", availability: "CONFIRM" },
    { trainNo: "12636", name: "Vaigai SF", class: "3A", availability: "RAC" },
    { trainNo: "12638", name: "Pandian SF", class: "SL", availability: "WL" }
  ]);
});
app.get("/trains/confirm", (req, res) => {
  res.json([
    { trainNo: "20601", name: "Vande Bharat", class: "CC", availability: "CONFIRM" }
  ]);
});
app.get("/trains/rac", (req, res) => {
  res.json([
    { trainNo: "12636", name: "Vaigai SF", class: "3A", availability: "RAC" }
  ]);
});
app.get("/trains/wl", (req, res) => {
  res.json([
    { trainNo: "12638", name: "Pandian SF", class: "SL", availability: "WL" }
  ]);
});
app.get("/trains/filter/:type", (req, res) => {
  const type = req.params.type.toUpperCase();

  const trains = [
    { trainNo: "20601", name: "Vande Bharat", class: "CC", availability: "CONFIRM" },
    { trainNo: "12636", name: "Vaigai SF", class: "3A", availability: "RAC" },
    { trainNo: "12638", name: "Pandian SF", class: "SL", availability: "WL" }
  ];

  res.json(trains.filter(t => t.availability === type));
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

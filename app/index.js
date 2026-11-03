// app/index.js
const express = require("express");
const config = require("../config/env");

const app = express();
app.use(express.json());

// Basic route / Health check
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "MediTrack API is running",
    timestamp: new Date().toISOString(),
  });
});

app.listen(config.PORT, () => {
  console.log(`MediTrack server listening on port ${config.PORT}`);
});

console.log(`Application Name: ${config.APP_NAME}`);
console.log(`Running on Port: ${config.PORT}`);
console.log(
  "MediTrack Appointment System initialized by Tilaye Wolidu Assefa.",
);

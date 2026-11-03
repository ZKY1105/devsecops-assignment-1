//console.log("MediTrack Appointment System initialized by Tilaye Wolidu Assefa");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Basic route / Health check
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'MediTrack API is running',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`MediTrack server listening on port ${PORT}`);
});

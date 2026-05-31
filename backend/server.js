const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Cairo Excursion API Running",
  });
});

app.post("/api/bookings", (req, res) => {
  console.log("NEW BOOKING:");
  console.log(req.body);

  res.json({
    success: true,
    message: "Booking received",
  });
});

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

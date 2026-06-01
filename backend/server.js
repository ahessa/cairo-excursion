require("dotenv").config();

const express = require("express");
const cors = require("cors");

const pool = require("./db/database");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Cairo Excursion API Running",
  });
});

app.post("/api/bookings", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      tour,
      date,
      guests,
      transportation,
      total,
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO bookings
      (
        name,
        email,
        phone,
        tour,
        booking_date,
        guests,
        transportation,
        total
      )
      VALUES
      ($1,$2,$3,$4,$5,$6,$7,$8)
      RETURNING *
      `,
      [
        name,
        email,
        phone,
        tour,
        date,
        guests,
        transportation,
        total,
      ]
    );

    res.json({
      success: true,
      booking: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Database error",
    });
  }
});

app.get("/api/bookings", async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT *
      FROM bookings
      ORDER BY created_at DESC
      `
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Database error",
    });
  }
});


const PORT = 5001;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});

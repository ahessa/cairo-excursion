require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const nodemailer = require("nodemailer");
const initDatabase = require("./init-db");
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

app.post("/api/create-payment", async (req, res) => {
  try {

    const {
      name,
      email,
      phone,
      tour,
      total
    } = req.body;
    
    
// DELETE BOOKING

app.delete("/api/bookings/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM bookings WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    console.error("Delete booking error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete booking",
    });
  }
});    
    // Get live USD → EGP exchange rate

const rateResponse = await axios.get(
  "https://open.er-api.com/v6/latest/USD"
);

const exchangeRate =
  rateResponse.data.rates.EGP;

const amountEGP =
  Math.round(total * exchangeRate);

console.log(
  `$${total} USD = ${amountEGP} EGP`
);

    const response = await axios.post(
      "https://accept.paymob.com/v1/intention/",
      {
        amount: amountEGP * 100,
        currency: "EGP",

        payment_methods: [
          Number(process.env.PAYMOB_INTEGRATION_ID)
        ],

        items: [
          {
            name: tour,
            amount: amountEGP * 100,
            description: "Cairo Excursion Private Tour",
            quantity: 1
          }
        ],

        billing_data: {
          apartment: "NA",
          first_name: name.split(" ")[0],
          last_name:
            name.split(" ").slice(1).join(" ") || "Customer",
          street: "NA",
          building: "NA",
          phone_number: phone,
          city: "Cairo",
          country: "EG",
          floor: "NA",
          state: "Cairo",
          email
        },

        special_reference:
          `booking-${Date.now()}`,

        expiration: 3600,

        redirection_url:
          process.env.PAYMOB_REDIRECT_URL
      },

      {
        headers: {
          Authorization:
            `Token ${process.env.PAYMOB_SECRET_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({
      success: true,
      clientSecret:
        response.data.client_secret
    });

  } catch (error) {

    console.error(
      error.response?.data || error.message
    );

    res.status(500).json({
      success: false
    });

  }
});

app.post("/api/contact", async (req, res) => {
  try {

    const {
      name,
      email,
      phone,
      message
    } = req.body;

    await pool.query(
      `
      INSERT INTO contact_messages
      (
        name,
        email,
        phone,
        message
      )
      VALUES
      ($1,$2,$3,$4)
      `,
      [
        name,
        email,
        phone,
        message
      ]
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: "New Cairo Excursion Inquiry",

      html: `

      <h2>New Inquiry</h2>

      <p><b>Name:</b> ${name}</p>

      <p><b>Email:</b> ${email}</p>

      <p><b>Phone:</b> ${phone}</p>

      <p><b>Message:</b></p>

      <p>${message}</p>

      `
    });

    res.json({
      success: true
    });

  }

  catch (error) {

    console.error(error);

    res.status(500).json({
      success: false
    });

  }

});


const PORT = 5001;

initDatabase();

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});

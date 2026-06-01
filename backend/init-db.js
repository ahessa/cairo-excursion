const pool = require("./db/database");

async function initDatabase() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        tour VARCHAR(255) NOT NULL,
        booking_date DATE,
        guests INTEGER,
        transportation BOOLEAN,
        total NUMERIC(10,2),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("Bookings table ready");
  } catch (error) {
    console.error(
      "Database initialization failed:",
      error
    );
  }
}

module.exports = initDatabase;

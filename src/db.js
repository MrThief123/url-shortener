require('dotenv').config()

const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
});


// Test the database connection
pool.connect()
    .then(client => {
        console.log('✅ Successfully connected to PostgreSQL!')
        client.release() // Release connection back to pool
    })
    .catch(err => console.error('❌ Database connection error:', err))

module.exports = pool
require('dotenv').config()

const pgPromise = require('pg-promise')()

const database = pgPromise({
    connectionString: process.env.DATABASE_URL,
})

module.exports = database;

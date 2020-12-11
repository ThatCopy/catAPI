const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require("dotenv").config()
const db = require('./db')
const catRouter = require('./routes/cat-router.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/', catRouter)

module.exports = app;

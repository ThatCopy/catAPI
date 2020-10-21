const mongoose = require('mongoose')
const mongo = process.env.MONGO || require("../env").mongodb

mongoose
    .connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
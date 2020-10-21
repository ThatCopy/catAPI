const mongoose = require('mongoose')
const { mongodb } = require("../env")

mongoose
    .connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
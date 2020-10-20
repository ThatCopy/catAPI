const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cat = new Schema(
    {
        _id: {type: Number, required: true},
        url: { type: String, required: true },
        webpurl: { type: String, required: true },
        x: {type: Number, required: true},
        y: {type: Number, required: true}
    },
    { timestamps: false },
)

module.exports = mongoose.model('cat', Cat)
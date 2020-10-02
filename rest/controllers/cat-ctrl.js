const Cat = require('../models/cat-model')
getCat = async (req, res) => {
    let r = await Cat.countDocuments()
    let random = Math.floor(Math.random() * r)
    res.send(JSON.stringify((await Cat.findById(random)).toJSON()))
}


module.exports = {
    getCat,
}
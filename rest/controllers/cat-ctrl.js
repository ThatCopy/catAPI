const Cat = require('../models/cat-model')
getCat = async (req, res) => {
    let r = await Cat.countDocuments()
    let random = Math.floor(Math.random() * r)
    res.send((await Cat.findById(random)).toString())
}


module.exports = {
    getCat,
}
const Cat = require('../models/cat-model')

getCat = async (req, res) => {
    let r = await Cat.countDocuments()
    let random = Math.floor(Math.random() * r)
    res.send((await Cat.findById(random)).toJSON())
}

getCatId = async (req, res) => {
    if(!isNaN(req.params.id)){
        try {
            res.send((await Cat.findById(req.params.id)).toJSON())
        } catch (error) {
            res.status(400);
            res.send({"error": "Bad id"})
        }
    } else {
        res.send("Provide a real ID")
    }
}

module.exports = {
    getCat,
    getCatId
}

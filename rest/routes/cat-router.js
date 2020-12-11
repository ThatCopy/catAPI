const express = require('express')

const CatCtrl = require('../controllers/cat-ctrl')

const router = express.Router()

router.get('/get/', CatCtrl.getCat)

router.get('/getId/:id', CatCtrl.getCatId)

router.get("/", (req, res) => {
    res.send("Use /get/ to get a random cat or /getId/<id> to get a cat with id")
})

module.exports = router
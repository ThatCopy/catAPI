const express = require('express')

const CatCtrl = require('../controllers/cat-ctrl')

const router = express.Router()

router.get('/get/', CatCtrl.getCat)

router.get('/getId/:id', CatCtrl.getCatId)

module.exports = router
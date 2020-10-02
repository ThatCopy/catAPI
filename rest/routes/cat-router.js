const express = require('express')

const CatCtrl = require('../controllers/cat-ctrl')

const router = express.Router()

router.get('/get/', CatCtrl.getCat)

module.exports = router
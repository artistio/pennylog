var express = require('express')
var router = express.Router()

router.use('/expense', require('./expense'))

module.exports = router

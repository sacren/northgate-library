var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.get('/survey', function (req, res, next) {
  res.send('Northgate Library is the best!')
})

module.exports = router

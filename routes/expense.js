const express = require('express')
const app = express()
var router = express.Router()

// Operation GET
// Parameter: startDate, endDate
// Results: List of Expenses in between startDate & endDate
router.get('/', function(req, res) {
  res.json('Audi, BMW, Mercedes')
})

// Operation GET
// Parameter: /:expenseId
// Results: List of Expenses in between startDate & endDate
router.get('/:expenseId', function(req, res) {
  res.json(req.params.expenseId)
})

module.exports = router

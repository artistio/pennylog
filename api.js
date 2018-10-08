const express = require('express')
const app = express()
const port = 3000
var router = express.Router()

app.use('/api', require('./routes'))

app.listen(port, () => console.log(`API started on port ${port}!`))

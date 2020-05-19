const express = require('express')
const cors = require('cors')
// require('./db/mongoose')
const emailRouter = require('./routers/email')

const app = express()

app.use(express.json())
app.use(cors())
app.use(emailRouter)

module.exports = app
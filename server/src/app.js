const express = require('express')
const app = express()
const cors = require('cors')

const messages = require('./message')
app.use(cors())


app.listen(8100)


app.get('/messages', (req,res) => {
    messages.getMessages(req,res)
  })

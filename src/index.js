const express = require('express')
const cors = require('cors')
const { _getAccountInformationFromHederaMainnetRestApi } = require('./fetch.js')

const app = express()

app.use(cors())
app.use(express.json())

app.post('/', async (req, res) => {
  const data = await _getAccountInformationFromHederaMainnetRestApi(req.body.accountId)
  res.send(data)
})

app.listen(process.env.PORT, () => {
  console.log(`Signin endpoint listening on port ${process.env.PORT}`)
})

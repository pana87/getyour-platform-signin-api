const express = require('express')
const cors = require('cors')
const { _getAccountInformationFromHederaMainnetRestApi } = require('./fetch.js')

const app = express()
const port = 80

app.use(cors())
app.use(express.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.post('/', async (req, res) => {
  const data = await _getAccountInformationFromHederaMainnetRestApi(req.body.accountId)
  res.send(data)
})

app.listen(port, () => {
  console.log(`Signin endpoint listening on port ${port}`)
})

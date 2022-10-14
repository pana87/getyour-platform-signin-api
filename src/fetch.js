const https = require('https')

module.exports._getAccountInformationFromHederaMainnetRestApi = function (accountId) {
  return new Promise((resolve, reject) => {
    https.get(`https://mainnet-public.mirrornode.hedera.com/api/v1/accounts?account.id=${accountId}`, (res) => {
      let data = ''
      res.on('data', buffer => data += buffer)
      res.on('end', () => resolve(data))
    }).on('error', (error) => reject(error))
  })
}

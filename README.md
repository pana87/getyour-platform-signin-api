# Getyour Platform Signin Endpoint

A simple endpoint, where users can send their account id and get a response from hedera rest api.

## Sign in request

Send a post request with a Hedera Account ID to `https://getyour-platform-signin-api.herokuapp.com`.

## Sign in response

Get following response back.

```json
{"accounts":[{"account":"0.0.1234","alias":null,"auto_renew_period":2592000,"balance":{"balance":200115118,"timestamp":"1665744117.768439114","tokens":[]},"decline_reward":false,"deleted":false,"ethereum_nonce":null,"evm_address":null,"expiry_timestamp":"1572580440.000000000","key":{"_type":"ED25519","key":"7f5672873ee6502e30b760ff6836835678bcedaa926c8766618832b193115aad"},"max_automatic_token_associations":0,"memo":"","receiver_sig_required":null,"staked_account_id":null,"staked_node_id":null,"stake_period_start":null}],"links":{"next":null}}
```

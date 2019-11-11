var express = require('express');
var router = express.Router();

const { getBalance, getTotalSupply } = require('../utils/eth')
const Excepts = require('../models/excepts')
const tokenInfo = require('../config/info.json')

let coin = require('./coin')

const sum = arr => {
  let sum = 0
  arr.forEach(item => sum += item)
  return sum
}

router.get('/admin', async (req, res) => {
  let totalSupply = await getTotalSupply()
  let excepts = Excepts.findAll()
  console.log(tokenInfo)
  console.log(tokenInfo.TOKEN_ADDRESS)
  let balances = []

  for (let i in excepts) {
    balances.push(getBalance(excepts[i]))
  }

  balances = await Promise.all(balances)
  let mainHolderSum = sum(balances)

  return res.render('index', {
    totalSupply,
    excepts,
    balances,
    mainHolderSum,
    tokenAddress: tokenInfo.TOKEN_ADDRESS,
    percent: (totalSupply - mainHolderSum) / totalSupply * 100
  })
})

router.use('/coin', coin)

module.exports = router;

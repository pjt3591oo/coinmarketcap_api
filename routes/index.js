var express = require('express');
var router = express.Router();

const { getBalance, getTotalSupply } = require('../utils/eth')
const Excepts = require('../models/excepts')

let coin = require('./coin')

const sum = arr => {
  let sum = 0
  arr.forEach(item => sum += item)
  return sum
}

router.get('/admin', async (req, res) => {
  let totalSupply = await getTotalSupply()
  
  let excepts = Excepts.findAll()

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
    percent: (totalSupply - mainHolderSum) / totalSupply * 100
  })
})

router.use('/coin', coin)

module.exports = router;

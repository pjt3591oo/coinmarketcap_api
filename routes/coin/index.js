const express = require('express');
const router = express.Router();

const { getBalance, getTotalSuppluy, getExcepts } = require('../../utils/eth')

const sum = arr => {
  let sum = 0
  arr.forEach(item => sum += item)
  return sum
}

router.get('/', async (req, res, next) => {
  let totalSupply = await getTotalSuppluy()
  let excepts = getExcepts()

  let temp = []

  for (let i in excepts) {
    temp.push(getBalance(excepts[i]))
  }

  temp = await Promise.all(temp)
  let min = totalSupply - sum(temp)

  console.log(totalSupply)
  console.log(temp)
  console.log(min)

  return res.send(min.toString())
});

router.post('/', (req, res, next) => {
  return res.status(201).send(123456)
})

router.delete('/', (req, res, next) => {
  return res.status(201).send(123456)
})

module.exports = router;

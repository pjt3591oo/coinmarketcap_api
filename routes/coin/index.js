const express = require('express');
const router = express.Router();

const { getBalance, getTotalSuppluy } = require('../../utils/eth')
const Excepts = require('../../models/excepts')

const sum = arr => {
  let sum = 0
  arr.forEach(item => sum += item)
  return sum
}

// 유통량 조회
router.get('/', async (req, res, next) => {
  let totalSupply = await getTotalSuppluy()
  let ets = Excepts.findAll()

  let temp = []

  for (let i in ets) {
    temp.push(getBalance(ets[i]))
  }

  temp = await Promise.all(temp)
  let result = totalSupply - sum(temp)

  return res.send(result.toString())
});

router.post('/', (req, res, next) => {
  let { address } = req.body
  let isAdd = Excepts.add(address)
  let msg = ''
  
  if (isAdd) msg = "success"
  else msg = "fail"
  
  return res.status(201).send(msg)
})

router.delete('/', (req, res, next) => {
  let { address } = req.body
  let isRemove = Excepts.remove(address)
  let msg = ''
  
  if (isRemove) msg = "success"
  else msg = "fail"
  
  return res.status(201).send(msg)
})

router.get('/excepts', (req, res, next) => {
  let ets = Excepts.findAll()
  return res.status(200).send(ets.join('\n'))
})

module.exports = router;

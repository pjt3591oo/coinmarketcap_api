const ABI = require('../../config/ABI.json')
const { TOEKN_ADDRESS, NODE_IP } = require('../../config/info.json')

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(NODE_IP)); 

const excepts = require('../../config/excepts.json')

let tokenContract = new web3.eth.Contract(ABI, TOEKN_ADDRESS);

let totalSupply = 0

const getBalance = async address => {
  return new Promise(async (resolve, reject) => {
    let balance = await tokenContract.methods.balanceOf(address).call()
    let b = parseFloat(web3.utils.fromWei(balance, 'ether'))
    resolve(b)
  })
}

const getTotalSuppluy = async () => {
  totalSupply = totalSupply || await tokenContract.methods.totalSupply().call()

  return parseFloat(web3.utils.fromWei(totalSupply, 'ether'))
}

const getExcepts = () => excepts

module.exports = { 
  tokenContract,
  getBalance,
  getTotalSuppluy,
  getExcepts
}
const excepts = require('../config/excepts.json')

class Excepts {
  constructor (excepts) {
    this.excepts = excepts || []
  }

  add (address) {
    let isAdd = false
    
    if (!this.validator(address)) {
      return isAdd
    }
    
    let findIdx = this.excepts.indexOf(address)
    
    if (findIdx < 0) {
      this.excepts.push(address)
      isAdd = true
    }
    
    return isAdd
  }

  remove (address) {
    let findIdx = this.excepts.indexOf(address)
    let isRemove = false
    
    if (findIdx > -1) {
      this.excepts.splice(findIdx, 1);
      isRemove = true
    }

    return isRemove
  }

  validator (address) {
    return (/^(0x){1}[0-9a-fA-F]{40}$/i.test(address));
  }

  findAll () {
    return this.excepts
  }
}

let e = new Excepts(excepts)

module.exports = e
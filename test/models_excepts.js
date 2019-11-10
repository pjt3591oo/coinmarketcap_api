let excepts = require('../models/excepts')

console.log(excepts.add(1))
console.log(excepts.add(4))
console.log(excepts.add(3))
console.log(excepts.add(2))
console.log(excepts.add(4))

console.log(excepts.excepts)

console.log(excepts.remove(3))
console.log(excepts.remove('0x666abbb00a882911170242f659d9c62f0526c69e'))
console.log(excepts.remove('0x666abbb00a882911170242f659d9c62f0526c69e'))

console.log(excepts.excepts)

let vali1 = excepts.validator('0x666abbb00a882911170242f659d9c62f0526c69e')
let vali2 = excepts.validator('0x666abbb00a882911170242f659d9c62f0526c69')

console.log(vali1)
console.log(vali2)
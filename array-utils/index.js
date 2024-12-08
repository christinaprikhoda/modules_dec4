const {unique, flatten, chunk} = require("./arrayUtils")

console.log(unique([4,5,6,7,8,8,6,5]))
console.log(flatten([4,5,6,7,[4,5,6, [6,8,9]],6,5]))
console.log(chunk([4,5,6],1))
const add = require('./adder.js');

console.log(add(5, 7) === 12, 'add positive');
console.log(add(-5, -7) === -12, 'add negative');
console.log(add(5, -7) === -2, 'add mixed');

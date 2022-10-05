const fs = require('fs')
const [n, ...nums] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const arr = [];

nums.forEach((num) => {
  switch(num) {
    case 0:
      arr.pop();
      break;
    default:
      arr.push(num);
      break;
  }
})

const length = arr.length;
const total = length === 0 ? 0 : arr.reduce((acc, cur) => acc + cur);

console.log(total);
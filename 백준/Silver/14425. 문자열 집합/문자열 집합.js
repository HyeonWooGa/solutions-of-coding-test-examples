const fs = require("fs");
const [numbers, ...inputs] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = numbers.split(" ").map(Number); 

const set = inputs.slice(0, n);
const target = inputs.slice(n, n + m); 

const obj = {};
let answer = 0;

set.forEach((el) => (obj[el] = true));
target.forEach((el) => {
  if (obj[el]) answer++;
});

console.log(answer);
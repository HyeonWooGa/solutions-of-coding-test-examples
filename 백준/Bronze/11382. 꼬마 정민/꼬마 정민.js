const fs = require("fs");
const numbers = fs.readFileSync("dev/stdin").toString().trim().split(" ").map(Number);

console.log(numbers.reduce((acc, cur) => acc + cur, 0))
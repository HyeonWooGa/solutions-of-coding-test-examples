// 브루트포스

const fs = require("fs");
const target = Number(fs.readFileSync("/dev/stdin"));

for (let i = 1; i <= target; i++) {
  const sum = String(i)
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur, i);

  if (sum === target) {
    console.log(i);
    break;
  }

  if (i === target) {
    console.log(0);
  }
}
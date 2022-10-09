// 브루트포스

const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin"));

let count = 0;
let movieNum = 665;

while (count < n) {
  movieNum++;
  if (movieNum.toString().includes("666")) {
    count++;
  }
}

console.log(movieNum);
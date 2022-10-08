// 그리디

const fs = require("fs");
let [_, lines] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const line = lines.split(" ").map(Number);

line.sort((a, b) => a - b);

let time = 0;
let temp = 0;

line.forEach((_, i) => {
  let arr = line.slice(0, i + 1);
  temp = arr.reduce((acc, cur) => acc + cur, temp);
  time += temp;
  temp = 0;
});

console.log(time);
// 집합과 맵

const fs = require("fs");
const [header, ...pocketmons] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = header.split(" ").map(Number);

const dogams = pocketmons.slice(0, n);
const targets = pocketmons.slice(n, n + m);

let ans = "";
const map = new Map(dogams.map((dogam, idx) => [dogam, idx + 1]));

targets.forEach((target) => {
  if (isNaN(+target)) {
    ans += `${map.get(target)}\n`;
  } else {
    ans += `${dogams[+target - 1]}\n`;
  }
});

console.log(ans);

// 배열 indexOf 로 시간초과 발생, Map 사용하여 해결
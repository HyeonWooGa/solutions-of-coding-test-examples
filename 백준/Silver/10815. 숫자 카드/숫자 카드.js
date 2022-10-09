// 집합과 맵

const fs = require("fs");
let [, cardsOwn, , cardsTarget] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

cardsOwn = new Set(cardsOwn.split(" "));
cardsTarget = cardsTarget.split(" ");

let ans = "";

cardsTarget.forEach((target) => {
	ans += cardsOwn.has(target) ? "1 " : "0 ";
});

console.log(ans);

// 비교대상이 많은경우 비교보다 Set 의 시간복잡도가 S(1) 로 빠릅니다.
const fs = require("fs");
let [, cardsOwn, , cardsTarget] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

cardsOwn = cardsOwn.split(" ");
cardsTarget = cardsTarget.split(" ");

const obj = {};

cardsOwn.forEach((cardOwn) => {
  obj[cardOwn] = obj[cardOwn] === undefined ? 1 : obj[cardOwn] + 1;
});

let ans = "";

cardsTarget.forEach((cardTarget) => {
  ans += obj[cardTarget] ? `${obj[cardTarget]} ` : "0 ";
});

console.log(ans);
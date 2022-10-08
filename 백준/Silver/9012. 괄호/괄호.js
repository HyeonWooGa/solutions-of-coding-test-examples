const fs = require("fs");
const [n, ...strings] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = [];
let yesOrNo = "YES";
let ans = "";

strings.forEach((str) => {
  str.split("").forEach((char) => {
    switch (char) {
      case "(":
        push();
        break;
      case ")":
        pop();
        break;
    }
  });
  yesOrNo = arr.length !== 0 ? "NO" : yesOrNo;
  arr = [];
  ans += `${yesOrNo}\n`;
  yesOrNo = "YES";
});

console.log(ans);

function push() {
  arr.push("(");
}

function pop() {
  if (arr.length === 0) {
    yesOrNo = "NO";
  } else {
    arr.pop();
  }
}
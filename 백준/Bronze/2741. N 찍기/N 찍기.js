const fs = require("fs");
const length = Number(fs.readFileSync("dev/stdin"));

const ans = Array.from({length}, (_, i) => i+1).reduce((acc, cur) => acc + `${cur}\n`,"");

console.log(ans);
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const numbers = [];

rl.on("line", function (line) {
  numbers.push(line);
}).on("close", function () {
  const x = Number(numbers[0]);
  const y = Number(numbers[1]);

  if (x > 0) {
    y > 0 ? console.log(1) : console.log(4);
  }

  if (x < 0) {
    y > 0 ? console.log(2) : console.log(3);
  }
});
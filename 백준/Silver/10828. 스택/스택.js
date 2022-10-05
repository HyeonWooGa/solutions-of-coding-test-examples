const fs = require('fs');
const [n, ...commands] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = [];
let str = "";

commands.forEach((cmd) => {
  switch (cmd) {
    case "pop":
      str += `${pop()}\n`;
      break;
    case "size":
      str += `${size()}\n`;
      break;
    case "empty":
      str += `${empty()}\n`;
      break;
    case "top":
      str += `${topp()}\n`;
      break;
    default:
      const [_, int] = cmd.split(" ");
      push(int);
      break;
  }
});

console.log(str);

function size() {
  return arr.length;
}

function empty() {
  return size() > 0 ? 0 : 1;
}

function pop() {
  return size() > 0 ? arr.pop() : -1;
}

function topp() {
  return size() > 0 ? arr[size() - 1] : -1;
}

function push(int) {
  arr.push(int);
  return;
}
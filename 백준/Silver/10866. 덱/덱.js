// 덱

const fs = require("fs");
let [n, ...commands] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = [];
let ans = "";

commands = commands.map((cmd) => cmd.split(" "));

commands.forEach((cmd) => {
  switch (cmd[0]) {
    case "push_front":
      push_front(cmd[1]);
      break;
    case "push_back":
      push_back(cmd[1]);
      break;
    case "pop_front":
      ans += pop_front();
      break;
    case "pop_back":
      ans += pop_back();
      break;
    case "size":
      ans += `${size()}\n`;
      break;
    case "empty":
      ans += empty();
      break;
    case "front":
      ans += front();
      break;
    case "back":
      ans += back();
      break;
  }
});

console.log(ans);

function push_front(num) {
  arr.unshift(num);
  return "";
}

function push_back(num) {
  arr.push(num);
  return "";
}

function pop_front() {
  return size() ? arr.shift() + "\n" : "-1\n";
}

function pop_back() {
  return size() ? arr.pop() + "\n" : "-1\n";
}

function size() {
  return arr.length;
}

function empty() {
  return size() ? "0\n" : "1\n";
}

function front() {
  return size() ? arr[0] + "\n" : "-1\n";
}

function back() {
  return size() ? arr[size() - 1] + "\n" : "-1\n";
}
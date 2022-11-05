const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

// const input = '2 1 5'.split(' ').map(Number);

const day = input[0];
const night = input[1];
const goal = input[2];

console.log(Math.ceil((goal - night) / (day - night)));
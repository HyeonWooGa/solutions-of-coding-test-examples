const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

//const input = '2100000000 9 10'.split(' ').map(Number); console.log(input);

const fixedCost = input[0];
const variableCost = input[1];
const sellingCost = input[2];

let count = 0;

const profit = sellingCost - variableCost;

if(profit <= 0) console.log(-1);
else {
count = Math.floor(fixedCost / profit) + 1;

console.log(count);
}
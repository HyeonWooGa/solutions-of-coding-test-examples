const fs = require('fs');
const [n, nums, target] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let ans = 0;

nums.split(' ').forEach((num) => {
    if(num === target) ans++;
})

console.log(ans);
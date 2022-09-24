const fs = require('fs');
const char = fs.readFileSync('/dev/stdin').toString().trim();

console.log(char.charCodeAt(0));
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

if(Number(input[0]) > Number(input[1])) console.log('>')
if(Number(input[0]) < Number(input[1])) console.log('<')
if(Number(input[0]) === Number(input[1])) console.log('==')
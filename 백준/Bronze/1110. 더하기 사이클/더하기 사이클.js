const fs = require('fs');

let num = Number(fs.readFileSync('/dev/stdin'));

const target = num;
let count = 0;

while(target !== num || count === 0) {
  let a = num % 10; //console.log(a);
  let b = Math.floor(num / 10); //console.log(b);
  let c = (a+b) % 10; //console.log(c);
  count ++;
  
  //console.log(Number(a.toString()+c.toString()))
  
  //ans = num;
  num = Number(a.toString()+c.toString());
}

console.log(count);
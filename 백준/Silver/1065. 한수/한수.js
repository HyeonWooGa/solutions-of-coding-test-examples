const fs = require('fs');
const number = Number(fs.readFileSync('/dev/stdin'));

const hanNumbers = new Set();

for(let i = 1; i<=number; i++) {
  const str = i + "";
  if(i < 100) {
    hanNumbers.add(i);
  }
  else {
    const differ1 = Number(str[2]) - Number(str[1]);
    const differ2 = Number(str[1]) - Number(str[0]);
    
    if(differ1 === differ2) {
      hanNumbers.add(i);
    }
  }
}

console.log(hanNumbers.size);
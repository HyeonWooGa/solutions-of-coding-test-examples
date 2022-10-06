const fs = require('fs');
let [dealer, cards] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = dealer.split(' ').map(Number);
cards = cards.split(' ').map(Number);

let max = 0;

for(let i = 0; i <= n; i++) {
  for(let j = i+1; j <= n; j++) {
    for(let k = j+1; k <= n; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if(sum <= m && sum > max) {
        max = sum;
      }
    }
  }
}

console.log(max);
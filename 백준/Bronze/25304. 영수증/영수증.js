// 문제 : 영수증이 맞는지 확인하는 문제

// 입력 : 1) 총액 2) 물건의 종류 3) 각 물건의 가격과 갯수

// 출력 : "Yes" | "No"

// const str = "260000\n4\n20000 5\n30000 2\n10000 6\n5000 8"
// const input = str.trim().split('\n');

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const totalReceipt = Number(input.shift()); // console.log(totalReceipt);
const numOfKinds = Number(input.shift()); // console.log(numOfKinds);
let totalCalculated = 0;

for(let i = 0; i < numOfKinds; i++) {
  const [price, amount] = input[i].split(' ').map(Number);
  
  totalCalculated += price * amount;
}

totalReceipt === totalCalculated ? console.log("Yes") : console.log("No");
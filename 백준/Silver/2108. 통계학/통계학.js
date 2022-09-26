const fs = require("fs");
const [n, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

numbers.sort((a, b) => a - b);

const average = Math.round(numbers.reduce((acc, cur) => acc + cur, 0) / n);
console.log(average === -0 ? 0 : average);

const center = numbers[Math.floor(n / 2)];
console.log(center);

const countObj = {};

numbers.forEach((num, i) => {
  if (countObj[num] === undefined) {
    countObj[num] = 1;
  } else {
    countObj[num] += 1;
  }
});

const keys = Object.keys(countObj).sort((a, b) => a - b);
const values = Object.values(countObj);

const maxCount = Math.max(...values);

if (values.indexOf(maxCount) !== values.lastIndexOf(maxCount)) {
  const maxCountNumbers = [];

  keys.forEach((key) => {
    if (countObj[key] === maxCount) {
      maxCountNumbers.push(key);
    }
  });

  console.log(+maxCountNumbers[1]);
} else {
  keys.forEach((key) => {
    if (countObj[key] === maxCount) {
      console.log(+key);
    }
  });
}

console.log(Math.max(...numbers) - Math.min(...numbers));
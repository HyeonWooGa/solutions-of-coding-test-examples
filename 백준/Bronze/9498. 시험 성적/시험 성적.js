// 문제 : 시험 성적

// 입력 : 1) grade: int, 0 <= grade <= 100
// 출력 : "A" | "B" | "C" | "D" | "F"

const fs = require('fs');

const grade = Math.floor(Number(fs.readFileSync('/dev/stdin'))/ 10);

switch (grade) {
  case 10:
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("C");
    break;
  case 6:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}
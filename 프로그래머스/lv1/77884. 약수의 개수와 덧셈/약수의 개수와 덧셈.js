//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
// 1(🎩 refactor 220425) - codeisneverodd
function solution(left, right) {
  let answer = 0;
  for (let num = left; num <= right; num++) {
    answer = Number.isInteger(Math.sqrt(num)) ? answer - num : answer + num;
  }
  return answer;
}


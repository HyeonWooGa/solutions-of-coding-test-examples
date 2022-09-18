// 문제
//// 다트게임 점수 계산 로직
//// 1) 총 3번의 기회
//// 2) 각 기회마다 0 - 10 점
//// 3) S(1제곱), D(2제곱), T(3제곱) 영역이 존재
//// 4) 옵션 : * (해당 점수 && 바로 직전 점수 2배씩), # (해당 점수 마이너스)
//// 5) * 가 첫번째 나올시 해당 점수만 2배
//// 6) * 중첩 가능 중첩되면 4배
//// 7) S,D,T 점수마다 하나씩 존재
//// 8) *, # 은 옵션

// 입력
//// 1) dartResult:string, 0-10 사이의 정수 __ S, D, T __ [,*, #] 가 결합된 문자열

// 출력
//// 1) answer:number, 다트의 점수 (정수)

function solution(dartResult) {
  const arr = dartResult.split('');
  const arrConverted = [];
  let curNumIdx = 0;
	let preNumIdx = 0;
  
	arr.forEach((char, i) => {
    if(char === "1" && arr[i+1] === "0") {
      arr.splice(i, 2, "10");
    } 
  })
  
  arr.forEach((char, i) => {
    switch(char) {
  		case "0":
  		case "1":
  		case "2":
  		case "3":
  		case "4":
  		case "5":
  		case "6":
  		case "7":
  		case "8":
  		case "9":
  		case "10":
    		arrConverted.push(+char);
        preNumIdx = curNumIdx;
        curNumIdx = arrConverted.lastIndexOf(+char);
    		break;
      case "S":
        arrConverted[curNumIdx] = Math.pow(arrConverted[curNumIdx], 1);
        break;
      case "D":
        arrConverted[curNumIdx] = Math.pow(arrConverted[curNumIdx], 2);
        break;
      case "T":
        arrConverted[curNumIdx] = Math.pow(arrConverted[curNumIdx], 3);
        break;
      case "*":
        if(preNumIdx !== curNumIdx) {
          arrConverted[preNumIdx] *= 2;
        }
        arrConverted[curNumIdx] *= 2;
        break;
      case "#":
        arrConverted[curNumIdx] *= -1;
        break;
		}
    console.log(arrConverted);
  })
  
  return arrConverted.reduce((acc, cur) => acc + cur, 0);
}
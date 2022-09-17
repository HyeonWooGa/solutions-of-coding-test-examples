// 입력 1) n: int > 0
// 출력 2) answer: int, n^1/2 === squareRoot: int 의 (squareRoot+1)^2 === answer: int | -1, 양의 정수 제곱근이 없는경우 

// 의사코드
// 1) 입력 받은 n 의 값이 양의 정수 제곱근 squareRoot 가 있는지 판별합니다.
//// 1-1) 양의 정수 제곱근 squareRoot 없는경우, answer = -1
//// 1-2) 양의 정수 제곱근 squareRoot 있는 경우, answer = ((squareRoot+1)^2);

function solution(n) {
    let answer = 0;
    let squareRoot = Math.sqrt(n);
    console.log(squareRoot);
    
    //squareRoot = squareRoot + 1;
    
    squareRoot % 1 === 0 ? answer = Math.pow(squareRoot+1, 2) : answer = -1;
    // answer = Math.pow(squreRoot + 1); 은 왜 +1 이 안되지?
    // 아마 pow 함수에 수식이 들어가면 안되나봐요???
    // 혹시 잘 아시는 분 계실까요!?
    
    return answer;
}
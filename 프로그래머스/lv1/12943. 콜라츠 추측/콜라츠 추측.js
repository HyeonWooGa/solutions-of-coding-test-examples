// 입력 : number (1<= number <= 8,000,000)
// 출력 : number, 콜라츠 추측 작업을 몇 번 수행해야 1이 되는지

// 작업 :
//// 1-1 number 가 짝수라면 2로 나눕니다.
//// 1-2 number 가 홀수라면 3을 곱하고 1을 더합니다.
////   2 1 조건의 결과값이 1이 될 떄까지 반복합니다.

// 추가조건 : 작업을 500번 반복했는 데 1이 아니라면 -1 을 반환합니다.

function solution(num) {
  let answer = 0;
  
    for(;answer < 500; answer++) {
        if(num === 1) break;
        else if(num % 2 === 0) num = num / 2;
        else num = num * 3 + 1;
    }
    
    if(answer === 500) return -1
  
    return answer;
}

// 1. 우선 답을 넣을 빈 배열을 선언
// 2. 소인수분해가 되는 가장 작은 값인 2를 divisor라는 변수에 선언
// 3. 제한사항에서 n이 2가 될 수 있다고 명시해놓았기 때문에 (n >= 2)라고 작성하였고, while문을 사용하여 조건문이 참일 때 반복해서 실행될 수 있도록 해줌
// 4. 조건문(n % divisor === 0)이 참인 경우: divisor의 모든 배수를 제거하여 "소인수"만 남도록 n = n / divisor을 작성해줌
// 5. 조건문(n % divisor === 0)이 거짓인 경우: divisor의 값을 하나씩 늘릴 수 있도록 else divisor ++을 작성해줌
// 6. divisor의 모든 배수를 제거하기 위해 3번의 조건문이 반복될 때마다 (n / divisor를 진행할 때마다) result에 중복된 값이 들어왔기 때문에 [...new Set()] 메서드를 활용하여 중복된 값을 지워줌

function solution(n) {
  const result = [];
  let divisor = 2;
  
  while (n >= 2) {
    if (n % divisor === 0) {
      result.push(divisor)
      n = n / divisor;
    }
    
     else divisor ++;
    
  }
  
  return [...new Set(result)];
}

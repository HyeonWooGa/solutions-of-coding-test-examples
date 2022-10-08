// 문제  각 부서의 

// 입력  1) int[] 2) int
// 출력  int, 최대 몇 개의 부서에 물품을 지원할 수 있는지

// 의사코드 
// 1. 배열을 오름차순으로 정렬합니다
// 2. shift 연산으로 하나씩 배열에서 빼면서 예산에서 뺄셈합니다.
// 3. 뺄셈 할때마다 카운터를 +1 해줍니다.
// 4. 예산이 0 이상 일때만 진행하고 최종 카운터에서 -1 한 값을 반환합니다.

function solution(d, budget) {
    const sortedArr = d.sort((a, b) => b - a);
    let counter = 0;
    
    while(budget >= 0) {
        budget -= sortedArr.pop();
        counter += 1;
    }
    
    return counter - 1;
}
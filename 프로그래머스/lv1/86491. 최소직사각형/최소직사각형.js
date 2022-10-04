// 의사 코드
// 1. 모든 요소의 숫자 중에서 가장 큰 값을 찾고 해당 명함의 가로 세로 길이를 저장합니다.
// 2. 해당 명함을 인자 배열에서 제거합니다.
// 3. 모든 명함을 탐색하며 해당 명함의 작은값끼리 비교하여 해당 명함의 작은 값이 작은 경우 큰 값으로 바꿔줍니다.
// 4. 모든 명함이 탐색했을 때 남아있는 작은값과 1. 에서 구한 큰값을 곱해서 반환합니다.

function solution(sizes) {
    let max = 0;
    let arr = [];
    
    sizes.forEach((size) => {
        const [x, y] = size;
        const maxNum = Math.max(...size);
        if (max < maxNum) {
            max = maxNum;
            arr = [x, y];
        };
    })
    
    let elseNum = arr[arr.indexOf(max) === 1 ? 0 : 1];
    console.log(max, elseNum);
    
    sizes.forEach((size) => {
        const minNum = Math.min(...size);
        if (elseNum < minNum) {
            elseNum = minNum;
        };
    })
    
    return max * elseNum;
}
// 의사코드
// 1. 각각 배열의 숫자들을 2진수 문자열로 만들어 줍니다.
// 2. 2진수 문자열로 바뀐 배열들의 길이가 n이 안된다면 0으로 채워줍니다.
// 3. arr1, arr2 의 2진수 문자열로 바뀐 각 요소들이 각 자릿수에서 1이라면 #을 채워줍니다.
// 4. 3에서 만든 n개의 문자열이 담긴 배열을 반환합니다.

function solution(n, arr1, arr2) {
    // 정답배열 초기화
    const ans = Array.from(Array(n), () => ""); console.log(ans);
    
    // arr1 배열의 각 요소 n자리 2진수 문자열화
    const convertedArr1 = arr1.map((num) => {
        let binary = num.toString(2)
        if (binary.length < n) {
            while(binary.length < n) {
                binary = 0 + binary;
            }
        }
        return binary;
    }); 
    console.log(convertedArr1);
    
    // arr2 배열의 각 요소 n자리 2진수 문자열화
    const convertedArr2 = arr2.map((num) => {
        let binary = num.toString(2)
        if (binary.length < n) {
            while(binary.length < n) {
                binary = 0 + binary;
            }
        }
        return binary;
    }); 
    console.log(convertedArr2);
    
    // convertedArr1 과 convertedArr2 의 2진수 문자열 동시 탐색하여 정답 배열의 문자열 완성
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(convertedArr1[i][j] === '1' || convertedArr2[i][j] === '1') {
                ans[i] += "#";
            } else {
                ans[i] += " ";
            }
        }
    }
    
    return ans;
}
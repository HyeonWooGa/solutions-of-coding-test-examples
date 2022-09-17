// 문제
//// 단어와 숫자가 혼합된 문자열을 숫자로 반환

// 입력
//// 1) s:string, 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 (1 <= s의 길이 <= 50)

// 출력
//// 1) n:number, (1 이상 2,000,000,000 이하의 정수)

// 주의사항
//// 1) s가 "zero" || "0" 으로 시작하는 경우는 없습니다.

function solution(s) {
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    arr.forEach((word, i) => {
        s = s.replaceAll(word, i)
    })
    
    return parseInt(s);
}
function solution(a) {
    let result = 0
    // 빈도수별 배열 내림차 순 정리
    const frequency = a.reduce((acc, cur) => {
        acc[cur] ? acc[cur][1]++ : acc[cur] = [cur, 1]
        return acc
    }, []).filter(el => el).sort((a, b) => b[1]-a[1])
    
    // 빈도가 높은 수 순으로 접근
    for(let i = 0 ; i < frequency.length ; i ++) {
        const [num, count] = frequency[i] 
        let starCount = 0
        // 모든 수가 스타수열이라도 가장 길이가 길 수 없는 경우
        if(result >= count) continue
        
        // 배열을 순회하며 스타수열이 되는 조건 비교
        for(let j = 0 ; j < a.length ; j++) {
            
            // 해당 인덱스의 짝이 될 다음 요소가 정의되어야 함
            if(a[j+1] === undefined) continue
            
            // a[0] !== a[1] ...
            if(a[j] === a[j+1]) continue
            
            // 해당 집합에 스타수열이 될 수가 없다면
            if(a[j] !== num && a[j+1] !== num) continue
            
            starCount++
            // 두번 째 요소도 같이 비교했기 때문
            j++
        }
        
        // 정답 문자열보다 길이가 긴가?
        result = Math.max(result, starCount)
    }
    // 두 개의 요소가 있는 스타수열에 +1을 했기 때문에 2를 곱해야 길이가 나온다.
    return result*2
}
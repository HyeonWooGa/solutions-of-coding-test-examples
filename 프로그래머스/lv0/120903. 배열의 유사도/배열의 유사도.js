function solution(s1, s2) {
    let ans = 0;
    
    s1.forEach((el1) => {
        s2.forEach((el2) => {
            if(el1 === el2) {
                ans++;
                return false;   // 반복문의 break 역할
            }
        })
    })
    
    return ans;
}
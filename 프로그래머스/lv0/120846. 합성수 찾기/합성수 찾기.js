function solution(n) {
    let ans = 0;
    
    for(let i = 2; i <= n; i++) {
        let temp = 0;
        for (let j = 2; j <= Math.floor(i / 2); j++) {
            if (i % j === 0) {
                temp++;
            }
        }
        if (temp) ans++;
        temp = 0;
    }
    
    return ans;
}
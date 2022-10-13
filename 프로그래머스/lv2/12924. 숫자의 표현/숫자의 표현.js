function solution(n) {
    let tot = 0;
    let count = 0;
    
    for(let i = 1; i <= n; i++) {
        for (let j = i; j <=n; j++) {
            tot += j;
            if (tot === n) {
                count++;
            }
            if (tot > n) {
                break;
            }
        }
        tot = 0;
    }
    
    return count;
}
function solution(n) {
    const ans = [];
    
    for (let i = 1; i <= n; i++) {
            if (n % i === 0 && !(ans.includes(i))) ans.push(i);
    }
    
    return ans;
}
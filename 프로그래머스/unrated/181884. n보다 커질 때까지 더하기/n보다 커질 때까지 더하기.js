function solution(numbers, n) {
    let ans = 0;
    
    numbers.forEach((el) => {
        if (ans <= n) ans += el;
    })
    
    return ans;
}
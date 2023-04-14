function solution(a, b, n) {
    let ans = 0;
    
    while(n >= a) {
        ans += Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + n % a;
    }
    return ans;
}
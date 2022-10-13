// 메모리제이션

function solution(n) {
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = (fib[i - 2] + fib[i - 1]) % 1234567;
    }
    return fib[n];
}

// 재귀 시간 초과
/*function solution(n) {
    
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    
    return solution(n-2) + solution(n-1);
} */
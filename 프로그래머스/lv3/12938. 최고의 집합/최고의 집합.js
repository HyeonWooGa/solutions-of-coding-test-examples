function solution(n, s) {
    if (n > s) return [-1];
    
    const arr = Array(n).fill(Math.floor(s/n));
    
    for(let i = 0; i < s%n; i++) {
        arr[arr.length - 1 - i]++;
    }
    
    return arr;
}
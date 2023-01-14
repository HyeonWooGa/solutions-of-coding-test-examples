function solution(n, k) {
    let total = 0;
    
    total += (n * 12000);
    total += ((k - Math.floor(n / 10)) * 2000);
    
    return total;
}
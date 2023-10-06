function solution(n, k) {
    let total = 0;
    
    let shouldPayBaverage = k - (Math.floor(n / 10));
    
    return (n * 12000) + (shouldPayBaverage * 2000);
}
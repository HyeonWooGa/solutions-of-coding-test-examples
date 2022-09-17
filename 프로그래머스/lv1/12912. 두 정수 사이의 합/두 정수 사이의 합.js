function solution(a, b) {
    let total = 0;
    
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    
    if (min === max) return min;
    
    for (let i = min; i <= max; i++) {
        total += i
    }
    
    return total;
}
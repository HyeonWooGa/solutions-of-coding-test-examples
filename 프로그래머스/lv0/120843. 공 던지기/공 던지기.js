function solution(numbers, k) {
    let idx = 0 + (2 * (k - 1));
    
    return idx >= numbers.length ? numbers[idx % numbers.length] : numbers[idx];
}
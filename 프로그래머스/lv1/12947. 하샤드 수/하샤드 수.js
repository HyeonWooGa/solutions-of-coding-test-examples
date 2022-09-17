function solution(x) {
    const total = x.toString().split('').map(Number).reduce((acc, cur) => acc + cur);
    
    return x % total === 0;
}
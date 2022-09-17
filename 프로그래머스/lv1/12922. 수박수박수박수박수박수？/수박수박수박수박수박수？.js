function solution(n) {
    
    return Array.from(Array(n), (v, i) => i%2 === 0 ? "수" : "박").join('');
}
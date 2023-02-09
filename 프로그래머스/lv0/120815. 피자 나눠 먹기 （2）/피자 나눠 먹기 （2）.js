const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b); 
const lcm = (a, b) => a * b / gcd(a, b);

function solution(n) {
    const lcmSolution = lcm(n, 6);
    
    return lcmSolution / 6;
}
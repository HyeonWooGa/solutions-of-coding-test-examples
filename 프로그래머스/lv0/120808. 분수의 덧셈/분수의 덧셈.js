const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b); 
const lcm = (a, b) => a * b / gcd(a, b);

function solution(numer1, denom1, numer2, denom2) {
    const denomTemp = denom1 * denom2
    const numerTemp = numer1 * denom2 + numer2 * denom1;
    
    const lcmDenomNumer = lcm(denomTemp, numerTemp);
    const denomAns = lcmDenomNumer / numerTemp;
    const numerAns = lcmDenomNumer / denomTemp;
    
    return [numerAns, denomAns];
}
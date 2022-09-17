function solution(arr, divisor) {
    const ans = arr.filter(number => number % divisor === 0).sort((a,b) => a - b);
    
    if (ans.length === 0) return [-1];
    
    return ans;
}
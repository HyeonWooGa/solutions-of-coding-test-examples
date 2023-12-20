function solution(num_str) {
    let ans = 0;
    
    num_str.split('').forEach((el) => ans += Number(el));
    
    return ans;
}
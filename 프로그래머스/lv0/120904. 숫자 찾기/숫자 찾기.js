function solution(num, k) {
    let ans = -1;
    
    num.toString().split('').forEach((el, idx) => {
        if (Number(el) === k && ans === -1) ans = idx + 1;
    })
    
    return ans;
}
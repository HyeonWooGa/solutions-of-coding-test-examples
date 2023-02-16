function solution(n, numlist) {
    const ans = [];
    
    numlist.forEach((num) => {
        if (num % n === 0) ans.push(num);
    })
    
    return ans;
}
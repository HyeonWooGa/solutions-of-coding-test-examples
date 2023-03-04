function solution(array) {
    let ans = 0;
    
    array.forEach((el) => {
        el.toString().split('').forEach((num) => {
            if (num === '7') ans++;
        })
    })
    
    return ans;
}
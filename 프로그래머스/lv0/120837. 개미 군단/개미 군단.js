function solution(hp) {
    const arr = [5, 3, 1];
    let ans = 0;
    
    arr.forEach((att) => {
        const temp = Math.floor(hp / att);
        ans += temp;
        hp -= temp * att;
    })
    
    return ans;
}
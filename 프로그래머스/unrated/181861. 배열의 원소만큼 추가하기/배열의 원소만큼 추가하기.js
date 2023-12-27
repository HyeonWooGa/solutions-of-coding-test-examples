function solution(arr) {
    const ans = [];
    
    arr.forEach((el) => {
        for(let i = 0; i < el; i++) {
            ans.push(el);
        }
    })
    
    return ans;
}
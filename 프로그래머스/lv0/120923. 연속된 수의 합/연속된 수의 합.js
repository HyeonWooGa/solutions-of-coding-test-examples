function solution(num, total) {
    const ans = [];
    let temp = Math.floor(total / num);
    
    for (let i = temp; ; i--) {
        for (let j = i; j < i + num; j++) {
            ans.push(j);
        }
        if (ans.reduce((acc, cur) => acc + cur) === total) break;
        else ans.splice(0, ans.length);
    }
    
    return ans;
}
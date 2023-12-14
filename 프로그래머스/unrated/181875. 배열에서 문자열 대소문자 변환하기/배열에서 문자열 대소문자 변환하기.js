function solution(strArr) {
    const ans = [];
    
    strArr.forEach((el, i) => {
        if (i % 2 === 0) ans.push(el.toLowerCase());
        else ans.push(el.toUpperCase());
    })
    
    return ans;
}
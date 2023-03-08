function solution(s) {
    const arr = s.split(' ');
    
    let prev = Number(arr.shift());
    let ans = prev;
    
    arr.forEach((char) => {
        if (char === 'Z') ans -= prev;
        else ans += Number(char);
        
        prev = Number(char);
    })
    
    return ans;
}
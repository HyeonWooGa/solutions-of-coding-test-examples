function solution(s){
    let stack = 0;
    
    if (s[0] === ")") return false;
    
    s.split("").forEach((char) => {
        if(char === ")") {
            if (stack === 0) return false;
            else stack -= 1;
        } else {
            stack += 1;
        }
    });
    
    return stack === 0 ? true : false;
}
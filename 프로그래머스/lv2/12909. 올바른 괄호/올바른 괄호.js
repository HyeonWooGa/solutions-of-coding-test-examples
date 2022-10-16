function solution(s){
    let stack = 0;
    
    s.split("").forEach((char) => {
        if(char === ")") {
            if (stack === 0) stack = 100001;
            else stack -= 1;
        } else {
            stack += 1;
        }
    });
    
    return stack === 0 ? true : false;
}
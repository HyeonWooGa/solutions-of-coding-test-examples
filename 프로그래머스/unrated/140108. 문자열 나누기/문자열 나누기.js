function solution(s) {
    let stack = [];
    let answer = 0;
    
    [...s].forEach((str, index) => {
        stack.push(str);
        
        const same = stack.filter((item) => item === stack[0]);
        const notSame = stack.filter((item) => item !== stack[0]);
        
        if(same.length === notSame.length){
            answer += 1;
            stack = [];
        }
    })
    
    if(stack.length !== 0){
        answer += 1;
    }
    
    return answer;
}

function solution(s) {
    const stack = [];
    const ans = [];
    
    [...s].forEach((str) => {
        if(!stack.includes(str)){
            ans.push(-1);
        }
              
        if(stack.includes(str)){
            ans.push(stack.length - stack.lastIndexOf(str));
        }
                   
        stack.push(str);
    })
    
    return ans;
}
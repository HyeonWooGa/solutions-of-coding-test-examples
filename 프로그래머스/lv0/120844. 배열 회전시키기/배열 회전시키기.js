function solution(numbers, direction) {
    const ans = numbers.slice();
    
    if (direction === 'right') {
        const temp = ans.pop();
        ans.unshift(temp);
    } else {
        const temp = ans.shift();
        ans.push(temp);
    }
    
    return ans;
}
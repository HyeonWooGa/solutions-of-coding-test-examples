function solution(array, commands) {
    const ans = [];
    
    commands.forEach((command) => {
        let elOfAns = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[command[2] - 1];
        ans.push(elOfAns);
    })
    
    return ans;
}
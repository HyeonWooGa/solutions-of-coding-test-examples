function solution(start, end_num) {
    const ans = [];
    
    for(let i = start; i >= end_num; i--) {
        ans.push(i);
    }
    
    return ans;
}
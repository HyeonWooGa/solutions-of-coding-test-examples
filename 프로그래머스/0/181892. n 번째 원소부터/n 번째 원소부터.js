function solution(num_list, n) {
    const ans = [];
    
    for (let i = n - 1; num_list.length > i; i++) {
        ans.push(num_list[i]);
    }
    
    return ans;
}
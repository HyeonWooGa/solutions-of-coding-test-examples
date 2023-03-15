function solution(num_list, n) {
    const ans = [];
    let idx = 0;
    
    for (let i = 0; i < num_list.length / n; i++) {
        const arr = [];
        for (let j = 0; j < n; j++) {
            arr.push(num_list[idx]);
            idx++;
        }
        ans.push(arr);
    }
    
    return ans;
}
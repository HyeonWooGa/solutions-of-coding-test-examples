function solution(num_list) {
    const ans = num_list.slice();
    const length = num_list.length;
    
    if (num_list[length - 1] > num_list[length - 2]) {
        ans.push(num_list[length - 1] - num_list[length - 2]);
    } else {
        ans.push(num_list[length - 1] * 2);
    }
    
    return ans;
}
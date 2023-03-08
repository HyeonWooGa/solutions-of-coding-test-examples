function solution(my_str, n) {
    const ans = [];
    
    for (let i = 0; i < my_str.length; i = i + n) {
        let str = '';
        for (let j = i; j < i + n && j < my_str.length; j++) {
            str += my_str[j];
        }
        ans.push(str);
    }
    
    return ans;
}
function solution(my_string, n) {
    let ans = '';
    
    my_string.split('').forEach((char) => {
        for (let i = 0; i < n; i++) {
            ans += char;
        }
    })
    
    return ans;
}
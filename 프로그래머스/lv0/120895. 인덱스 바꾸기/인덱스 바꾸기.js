function solution(my_string, num1, num2) {
    let ans = '';
    
    my_string.split('').forEach((char, idx) => {
        if (idx === num1) ans += my_string[num2];
        else if (idx === num2) ans += my_string[num1];
        else ans += char;
    })
    
    return ans;
}
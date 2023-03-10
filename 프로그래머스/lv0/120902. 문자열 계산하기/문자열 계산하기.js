function solution(my_string) {
    const arr = my_string.split(' ');
    let ans = Number(arr.shift());
    let operator = arr.shift();
    
    while(arr.length > 0) {
        if (operator === '+') ans += Number(arr.shift());
        else ans -= Number(arr.shift());
        
        operator = arr.shift();
    }
    
    return ans;
}
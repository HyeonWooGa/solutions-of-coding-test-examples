function solution(my_string, is_suffix) {
    const my_arr = my_string.split('');
    let ans = 1;
    
    is_suffix.split('').reverse().forEach((el) => {
        if (my_arr.pop() !== el) ans = 0;
    })
    
    return ans;
}
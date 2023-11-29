function solution(n_str) {
    const n_arr = n_str.split('');
    
    while(n_arr[0] === '0') {
        n_arr.shift();
    }
    
    return n_arr.join('');
}
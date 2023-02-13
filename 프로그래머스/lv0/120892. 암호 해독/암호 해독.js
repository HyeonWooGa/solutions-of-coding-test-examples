function solution(cipher, code) {
    const arr = [];
    let idx = code;
    let ans = '';
    
    while (idx <= cipher.length) {
        arr.push(idx);
        idx += code;
    }
    
    arr.forEach((el) => {
        ans += cipher[el - 1];
    })
    
    return ans;
}
function solution(age) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    let ans = '';
    
    age.toString().split('').forEach((num) => {
        ans += alphabet[Number(num)];
    })
    
    return ans;
}
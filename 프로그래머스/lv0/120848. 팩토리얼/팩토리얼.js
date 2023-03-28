function solution(n) {
    let tot = 1;
    let i = 0;
    
    while(tot <= n) {
        i++;
        tot *= i;
    }
    
    return i - 1;
}
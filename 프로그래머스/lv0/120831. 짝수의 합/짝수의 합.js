function solution(n) {
    let num = 1;
    let res = 0;
    
    while(num <= n) {
        if(num % 2 === 0) res += num;
        num++;
    }
    
    return res;
}
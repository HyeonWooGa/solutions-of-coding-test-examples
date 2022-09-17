function solution(n) {
    let num = 2;
    let remain = n % num;
    
    while(remain !== 1) {
        num++
        remain = n % num;
    }
    
    return num;
}
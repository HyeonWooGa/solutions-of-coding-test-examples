function solution(array, n) {
    let countN = 0;
    
    array.forEach((el) => {
        if(el === n) countN++;
    });
    
    return countN;
}
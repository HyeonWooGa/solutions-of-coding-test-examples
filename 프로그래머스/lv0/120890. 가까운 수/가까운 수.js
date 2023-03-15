function solution(array, n) {
    array.sort((a, b) => a - b);
    
    const arrDiff = [];
    
    array.forEach((el) => {
        arrDiff.push(Math.abs(el - n));
    })
    
    return array[arrDiff.indexOf(Math.min(...arrDiff))];
}
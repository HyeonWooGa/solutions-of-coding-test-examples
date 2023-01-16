function solution(array, height) {
    let numOfTaller = 0;
    
    array.forEach((el) => {
        if(el >height) numOfTaller++;
    });
    
    return numOfTaller;
}
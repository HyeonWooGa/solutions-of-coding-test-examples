function solution(n) {
    let num = 1;
    let numOf3x = 1;
    
    while (num < n) {
        if ((numOf3x + 1) % 3 === 0 || (numOf3x + 1).toString().split('').includes('3')) {
            numOf3x++;
        }
        else {
            numOf3x++;
            num++;
        }
        // console.log(num, numOf3x);
    }
    
    return numOf3x;
}
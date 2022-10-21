function solution(number) {
    let count = 0;
    let tot = 0;
    
    for (let i = 0; i < number.length - 2; i++) {
        tot += number[i];
        for (let j = i + 1; j < number.length - 1; j++) {
            tot += number[j];
            for (let k = j + 1; k < number.length; k++) {
                tot += number[k];
                if (tot === 0) count++;
                tot -= number[k];
            }
            tot -= number[j];
        }
        tot -= number[i];
    }
    
    return count;
}
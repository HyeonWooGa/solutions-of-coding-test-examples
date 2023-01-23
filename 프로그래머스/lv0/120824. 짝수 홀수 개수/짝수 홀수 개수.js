function solution(num_list) {
    const counter = [0, 0];
    
    num_list.forEach((num) => {
        if (num % 2 === 0) counter[0]++;
        else counter[1]++;
    })
    
    return counter;
}
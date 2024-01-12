function solution(num_list) {
    let odd = '';
    let even = '';
    
    num_list.forEach((el) => {
        if (el % 2 === 0) even += String(el);
        else odd += String(el);
    });
    
    return Number(odd) + Number(even);
}
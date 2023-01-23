function solution(my_string) {
    const ansArr = [];
    let ansStr = '';
    
    for(let i = my_string.length - 1; i >= 0; i--) {
        ansArr.push(my_string[i]);
    }
    
    ansStr = ansArr.join('');
    
    return ansStr;
}
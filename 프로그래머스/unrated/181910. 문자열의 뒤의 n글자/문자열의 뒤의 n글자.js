function solution(my_string, n) {
    const arrReverse = my_string.split('').reverse();
    
    return arrReverse.slice(0, n).reverse().join('');
}
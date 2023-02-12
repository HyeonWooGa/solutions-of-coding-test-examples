function solution(my_string) {
    const arrMyString = my_string.split('');
    
    const ansArr = arrMyString.map((char) => {
        if (char.toLowerCase() === char) return char.toUpperCase();
        else return char.toLowerCase();
    })
    
    return ansArr.join('');
}
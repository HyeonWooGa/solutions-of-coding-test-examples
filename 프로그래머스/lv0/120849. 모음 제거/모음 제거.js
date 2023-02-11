function solution(my_string) {
    const arrMyString = my_string.split('');
    const aeiou = 'aeiou';
    
    const arrAns = arrMyString.map((char, i) => {
        if(aeiou.includes(char)) return '';
        else return char;
    })
    
    return arrAns.join('');
}
function solution(my_string) {
    const set = new Set(my_string.split(''));
    const uniqueArr = [...set];
    
    return uniqueArr.join('');
}
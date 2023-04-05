function solution(my_string) {
    const regex = /[^0-9]/gi;
    
    return my_string.replace(regex, " ").trim().split(' ').map(Number).reduce((acc, cur) => acc + cur);
}
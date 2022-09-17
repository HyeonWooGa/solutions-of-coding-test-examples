function solution(s) {
    return s.split(' ').map((v) => v.split('').map((el, i) => i % 2 ? el.toLowerCase() : el.toUpperCase()).join('')).join(' ');
}
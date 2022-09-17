function solution(n) {
    // console.log(n.toString(3));
    const tritReversed = n.toString(3).split('').reverse().join('');
    
    return Number.parseInt(tritReversed, 3);
}
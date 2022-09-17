function solution(numbers) {
    const numNotIncludes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    
    numbers.forEach((number) => numNotIncludes.splice(numNotIncludes.indexOf(number), 1));
    
    return numNotIncludes.reduce((acc, cur) => acc + cur);
}
function solution(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    
    return sortedNumbers[numbers.length - 1] * sortedNumbers[numbers.length - 2];
}
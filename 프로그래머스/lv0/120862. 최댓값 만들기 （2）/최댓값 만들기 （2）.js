function solution(numbers) {
    const arr = numbers.slice().sort((a, b) => a - b);
    
    if (arr[0] * arr[1] > arr[arr.length - 1] * arr[arr.length - 2]) return arr[0] * arr[1];
    else return arr[arr.length - 1] * arr[arr.length - 2];
}
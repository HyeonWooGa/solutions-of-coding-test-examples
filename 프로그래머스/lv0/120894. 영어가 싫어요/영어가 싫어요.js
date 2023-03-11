function solution(numbers) {
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    let ans = numbers;
    
    arr.forEach((el, idx) => {
        ans = ans.replaceAll(el, idx);
    })
    
    return Number(ans);
}
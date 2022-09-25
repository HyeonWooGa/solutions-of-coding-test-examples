function solution(s) {
    const arr = s.toLowerCase().split('');
    arr[0] = isNaN(arr[0]) ? arr[0].toUpperCase() : arr[0];
    
    return arr.map((char, i) => {
        if(isNaN(char) && arr[i - 1] === ' ') {
            return char.toUpperCase();
        } else {
            return char;
        }
    }).join('');
}
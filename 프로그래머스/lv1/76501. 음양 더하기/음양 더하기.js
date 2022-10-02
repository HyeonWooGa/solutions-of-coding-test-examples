function solution(absolutes, signs) {
    const arr = [];
    signs.forEach((sign, i) => sign ? arr[i] = absolutes[i] : arr[i] = -absolutes[i]);
    
    console.log(arr);
    
    return arr.reduce((acc, cur) => acc + cur, 0);
}
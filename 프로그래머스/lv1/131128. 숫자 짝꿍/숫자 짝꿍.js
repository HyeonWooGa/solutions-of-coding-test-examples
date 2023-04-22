function solution(X, Y) {
    
    const yArr = Y.split('').reduce((arr, cur) => ++arr[+cur] && arr, Array(10).fill(0));
    const xArr = X.split('').reduce((arr, cur) => ++arr[+cur] && arr, Array(10).fill(0));
    
    return ( result = Array.from({length:10}, (_,i) => (9-i).toString().repeat(Math.min(yArr[9-i], xArr[9-i]))).join('') ) ? result*1 ? result : "0" : "-1";
}
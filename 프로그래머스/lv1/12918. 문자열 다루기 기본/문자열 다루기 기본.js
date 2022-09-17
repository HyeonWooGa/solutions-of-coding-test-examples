function solution(s) {
    const arr = s.split('');
    let isTrue = true;
    
    if(arr.length === 0 || (arr.length !== 4 && arr.length !== 6)) return false;
    
    arr.forEach((v) => isNaN(v) ? isTrue = false : null);
    
    return isTrue;
}
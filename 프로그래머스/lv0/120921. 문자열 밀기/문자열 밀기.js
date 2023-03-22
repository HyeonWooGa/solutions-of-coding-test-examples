function solution(A, B) {
    let tempStr = A;
    let tempArr = A.split('');
    let ans = 0;
    
    while(ans < A.length) {
        if (tempStr === B) break;
        tempArr = tempStr.split('');
        tempStr = '';
        tempStr += tempArr.pop();
        tempStr += tempArr.join('');
        ans++;
    }
    
    return ans >= A.length ? -1 : ans;
}
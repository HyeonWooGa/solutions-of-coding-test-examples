function solution(rsp) {
    let ans = '';
    
    rsp.split('').forEach((el) => {
        switch(el) {
            case '0':
                ans += '5';
                break;
            case '2':
                ans += '0';
                break;
            case '5':
                ans += '2';
                break;
        }
    })
    
    return ans;
}
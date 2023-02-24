function solution(order) {
    let ans = 0;
    
    order.toString().split('').forEach((num) => {
        if (num === '3' || num === '6' || num == '9') ans++;
    })
    
    return ans;
}
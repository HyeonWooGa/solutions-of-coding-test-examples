function solution(i, j, k) {
    const charK = k.toString();
    let ans = 0;
    
    for (i; i <= j; i++) {
        i.toString().split('').forEach((char) => {
            if (char === charK) ans++;
        });
    }
    
    return ans;
}
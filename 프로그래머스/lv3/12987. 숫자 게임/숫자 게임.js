function solution(A, B) {
    A.sort((a, b) => a - b)
    B.sort((a, b) => a - b)
    
    let count = 0;
    
    let idx = 0;
    B.forEach((num) => {
        if (A[idx] < num) {
            idx++;
            count++;
        }
    });
    
    
    return count;
}
function solution(bin1, bin2) {
    const decimal1 = parseInt(bin1, 2);
    const decimal2 = parseInt(bin2, 2);
    
    return (decimal1 + decimal2).toString(2);
}
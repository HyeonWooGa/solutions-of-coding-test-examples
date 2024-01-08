function solution(a, b) {
    const hopA = Number(String(a) + String(b));
    const hopB = Number(String(b) + String(a));
    
    return hopA > hopB ? hopA : hopB;
}
function solution(score) {
    const tot = [];
    const ans = [];
    
    score.forEach((el) => {
        tot.push(el[0] + el[1]);
    })
    
    const unsortedTot = tot.slice();
    
    tot.sort((a, b) => b - a);
    
    unsortedTot.forEach((el) => {
        ans.push(tot.indexOf(el) + 1);
    })
    
    return ans;
}
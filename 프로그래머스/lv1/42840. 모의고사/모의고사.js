function solution(answers) {
    const obj = {
        "1" : [1, 2, 3, 4, 5],
        "2" : [2, 1, 2, 3, 2, 4, 2, 5],
        "3" : [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    }
    const count = {
        "1" : 0,
        "2" : 0,
        "3" : 0
    }
    
    for(let i = 0; i < answers.length; i++) {
        for(let j = 1; j <= 3; j++) {
            if (answers[i] === obj[j][i % obj[j].length]) {
                count[j] += 1;
            }
        }
    }
    
    const ans = [];
    const values = Object.values(count);
    const max = Math.max(...values);
    values.forEach((v, i) => {
        if (v === max) ans.push(i + 1);
    })
    
    return ans;
}
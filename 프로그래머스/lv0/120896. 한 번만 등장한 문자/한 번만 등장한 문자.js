function solution(s) {
    const obj = {};
    const ans = [];
    
    s.split('').forEach((char) => {
        if (obj.hasOwnProperty(char)) obj[char]++;
        else obj[char] = 1;
    })
    
    for ([key, value] of Object.entries(obj)) {
        if (value === 1) ans.push(key);
    }
    
    return ans.sort().join('');
}
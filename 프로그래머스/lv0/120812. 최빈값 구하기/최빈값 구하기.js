function solution(array) {
    const obj = {};
    
    array.forEach((element) => {
        if(Object.keys(obj).includes(String(element))) {
            obj[element]++;
        } else {
            obj[element] = 1;
        }
    })
    
    const maxValue = Math.max(...Object.values(obj));
    let maxKeys = 0;
    let maxKey = 0;
    
    Object.keys(obj).forEach((key) => {
        if(obj[key] === maxValue) {
            maxKey = key;
            maxKeys++;
        }
    })
    
    return maxKeys === 1 ? Number(maxKey) : -1;
}
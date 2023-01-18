function solution(strlist) {
    const resultArray = [];
    
    strlist.forEach((str) => {
        resultArray.push(str.length);
    });
    
    return resultArray;
}
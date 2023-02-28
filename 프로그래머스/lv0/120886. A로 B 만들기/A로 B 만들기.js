function solution(before, after) {
    const arrBefore = before.split('');
    const arrAfter = after.split('');
    let ans = 1;
    
    arrAfter.forEach((char) => {
        if (arrBefore.includes(char)) {
            arrBefore.splice(arrBefore.indexOf(char), 1);
        } else {
            ans = 0;
        }
    })
    
    return ans;
}
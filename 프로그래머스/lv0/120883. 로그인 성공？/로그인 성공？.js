function solution(id_pw, db) {
    let ans = 'fail';
    
    db.forEach((userInfo) => {
        if (userInfo[0] === id_pw[0]) {
            if (userInfo[1] === id_pw[1]) ans = 'login';
            else ans = 'wrong pw';
        }
    })
    
    return ans;
}
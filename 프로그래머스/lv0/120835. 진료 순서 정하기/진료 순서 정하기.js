function solution(emergency) {
    const unSortedArr = emergency.slice();
    const sortedArr = emergency.sort((a, b) => b - a);
    const ans = [];
    
    unSortedArr.forEach((patient) => {
        ans.push(sortedArr.indexOf(patient) + 1);
    })
    
    return ans;
}
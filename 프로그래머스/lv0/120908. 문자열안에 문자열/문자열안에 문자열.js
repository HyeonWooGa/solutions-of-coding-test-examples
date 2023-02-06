function solution(str1, str2) {
    let ans = 2;
    const arr1 = str1.split('');
    
    for(let i = 0; i < str1.length; i++) {
        if(arr1.slice(i, i + str2.length).join('') === str2) ans = 1;
    }
    
    return ans;
}
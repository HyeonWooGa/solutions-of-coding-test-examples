function solution(s){
    const strArr = s.toLowerCase().split('');
    
    const numOfP = strArr.filter(char => char === "p").length;
    const numOfY = strArr.filter(char => char === "y").length;
    
    return numOfP === numOfY ? true : false;
}
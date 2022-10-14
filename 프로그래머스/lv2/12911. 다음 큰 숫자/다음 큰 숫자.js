function solution(n) {
    let nextNum = n + 1;
    let onlyOneOfN = getOneOfBit(n);
        
    while(nextNum < 1000000) {
        if (onlyOneOfN === getOneOfBit(nextNum)) return nextNum;
        nextNum++;
    }
}

function getOneOfBit(n) {
    let bit = n.toString(2);
    let onlyOne = bit.split("").filter((char) => char === "1");
    
    return onlyOne.length;
}
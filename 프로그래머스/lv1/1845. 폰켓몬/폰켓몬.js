function solution(nums) {
    const halfLengthOfNums = nums.length / 2;
    const kindsOfMon = [...new Set(nums)].length;
    
    return kindsOfMon >= halfLengthOfNums ? halfLengthOfNums : kindsOfMon;
}
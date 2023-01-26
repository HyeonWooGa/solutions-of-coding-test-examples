function solution(sides) {
    const sortedSides = sides.sort((a, b) => a - b);
    
    const longestSide = sortedSides[2];
    const shortestSide = sortedSides[0];
    const middleSide = sortedSides[1];
    
    if (longestSide < shortestSide + middleSide) return 1;
    else return 2;
    
}
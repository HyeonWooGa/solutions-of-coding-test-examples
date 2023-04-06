// 조건
//// 1. 그 외의 선분이 가장 큰 길이의 선분이 되는 경우
//// 2. 주어진 두개의 선분 중에 가장 큰 길이의 선분이 있는 경우

function solution(sides) {
    sides.sort((a, b) => a - b);
    const sideA = sides[0];
    const sideB = sides[1];
    const sideAnother = [];
    
    // 2
    for (let i = sideB; i < sideA + sideB; i++) {
        sideAnother.push(i);
    }
    
    // 1
    for (let i = sideB; i > 0; i--) {
        if (sideB < i + sideA && !(sideAnother.includes(i))) sideAnother.push(i);
    }
    
    return sideAnother.length;
}
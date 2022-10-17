// 타일 4군데가 겹치니까 - 4
// brown = 2x + 2y - 4
// 양 쪽 모서리에 갈색 타일이 있으니 
// yellow = (x - 2)(y - 2)

// x = (brown / 2) - y + 2
// y^2 - (2 + brown / 2) + brown + yellow = 0

function solution(brown, yellow) {
    let y = 1;
    
    while (y <= 2000000) {
        if (Math.pow(y, 2) - (2 + brown / 2) * y + brown + yellow === 0) break;
        
        y++;
    }
    
    return [brown / 2 - y + 2, y]
}
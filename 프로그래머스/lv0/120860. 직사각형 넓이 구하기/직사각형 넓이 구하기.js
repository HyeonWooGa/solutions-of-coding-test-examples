function solution(dots) {
    let maxX = maxY = -256;
    let minX = minY = 256;
    let ans = 0;
    
    dots.forEach((dot) => {
        if (dot[0] > maxX) maxX = dot[0];
        if (dot[0] < minX) minX = dot[0];
        if (dot[1] > maxY) maxY = dot[1];
        if (dot[1] < minY) minY = dot[1];
    })
    
    ans = ((maxX - minX) * (maxY - minY));
    
    return ans;
}
function solution(t, p) {
    const lengthT = t.length;
    const lengthP = p.length;
    const numP = Number(p);
    
    let idx = 0;
    let res = 0;
    
    while(idx + lengthP < lengthT + 1) {
        const slicedT = t.slice(idx, idx+lengthP);
        if (Number(slicedT) <= numP) {
            res++;
        }
        idx++;
    }
    
    return res;
}
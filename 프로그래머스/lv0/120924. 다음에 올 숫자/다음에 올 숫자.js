function solution(common) {
    let type = '등차수열';
    let differ = 0;
    
    for (let i = 0; i < common.length - 2; i++) {
        type = '등차수열';
        differ = common[i + 1] - common[i];
        if (common[i + 1] / common[i] === common[i + 2] / common[i + 1]) {
            type = '등비수열';
            differ = common[i + 1] / common[i];
        }
    }
    
    return type === '등차수열' ? common[common.length - 1] + differ : common[common.length - 1] * differ;
}
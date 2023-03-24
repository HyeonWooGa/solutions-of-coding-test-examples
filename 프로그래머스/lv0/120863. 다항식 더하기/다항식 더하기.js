function solution(polynomial) {
    let varX = 0;
    let cons = 0;
    let ans = '';
    
    polynomial.split(' + ').forEach((unary) => {
        if (unary.includes('x')) {
            if (unary === 'x') {
                varX += 1;
            } else {
                const arrTemp = unary.split('');
                arrTemp.pop();
                varX += Number(arrTemp.join(''));
            }
        } else {
            cons += Number(unary);
        }
    });
    
    ans = varX !== 0 ? cons !== 0 ? varX !== 1 ? varX + 'x + ' + cons : 'x + ' + cons : varX !== 1 ? varX + 'x' : 'x' : cons + '';
    
    return ans;
}
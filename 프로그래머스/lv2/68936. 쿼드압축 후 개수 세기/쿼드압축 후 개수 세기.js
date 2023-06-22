const solution = (arr) => {
    let zeroCount = 0;
    let oneCount = 0;
	
  	// 쪼개는 함수 (시작행, 시작열, 비교할 길이)
    const divide = (row, col, n) => {
        let canDivide = true;

        for (let y=row; y < row+n; y++) {
            for (let x=col; x < col+n; x++) {
                if (arr[row][col] !== arr[y][x]) 
                    canDivide = false;
            }
        };
      	// 만약 같은 값으로 이루어 지지 않았으면, 4분할 하여 n/2씩 비교하는 재귀함수를 호출한다.
        if (!canDivide) {
            const halfN = parseInt(n/2);
            divide(row, col, halfN)
            divide(row, col+halfN, halfN)
            divide(row+halfN, col, halfN)
            divide(row+halfN, col+halfN, halfN)
        // 만약 같은 값이면 행렬의 시작점을 비교하여 카운팅한다.
        } else {
            if (arr[row][col]) oneCount += 1;
            else zeroCount += 1;
        }
    }
    const N = arr.length;
    divide(0, 0, N);
    return [zeroCount, oneCount];    
}
function solution(board) {
    const n = board.length;
    const boardAns = [];
    let ans = 0;
    
    if (n === 1) return board[0][0] === 1 ? 0 : 1;
    
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j =0; j < n; j++) {
            row.push(0);
        }
        boardAns.push(row);
    }
    
    // console.log(boardAns);
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                boardAns[i][j] = 1;
                if (i !== 0 && i !== n - 1) {
                    boardAns[i - 1][j] = 1;
                    boardAns[i + 1][j] = 1;
                    if ( j !== 0 && j !== n - 1) {
                        boardAns[i][j - 1] = 1;
                        boardAns[i][j + 1] = 1;
                        boardAns[i - 1][j - 1] = 1;
                        boardAns[i - 1][j + 1] = 1;
                        boardAns[i + 1][j - 1] = 1;
                        boardAns[i + 1][j + 1] = 1;
                    } else if (j !== 0) {
                        boardAns[i][j - 1] = 1;
                        boardAns[i - 1][j - 1] = 1;
                        boardAns[i + 1][j - 1] = 1;
                    } else {
                        boardAns[i][j + 1] = 1;
                        boardAns[i - 1][j + 1] = 1;
                        boardAns[i + 1][j + 1] = 1;
                    }
                } else if (i !== 0) {
                    boardAns[i - 1][j] = 1;
                    if ( j !== 0 && j !== n - 1) {
                        boardAns[i][j - 1] = 1;
                        boardAns[i][j + 1] = 1;
                        boardAns[i - 1][j - 1] = 1;
                        boardAns[i - 1][j + 1] = 1;
                    } else if (j !== 0) {
                        boardAns[i][j - 1] = 1;
                        boardAns[i - 1][j - 1] = 1;
                    } else {
                        boardAns[i][j + 1] = 1;
                        boardAns[i - 1][j + 1] = 1;
                    } 
                } else {
                    boardAns[i + 1][j] = 1;
                    if ( j !== 0 && j !== n - 1) {
                        boardAns[i][j - 1] = 1;
                        boardAns[i][j + 1] = 1;
                        boardAns[i + 1][j - 1] = 1;
                        boardAns[i + 1][j + 1] = 1;
                    } else if (j !== 0) {
                        boardAns[i][j - 1] = 1;
                        boardAns[i + 1][j - 1] = 1;
                    } else {
                        boardAns[i][j + 1] = 1;
                        boardAns[i + 1][j + 1] = 1;
                    }
                }
            }
        }
    }
    // console.log(boardAns);
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (boardAns[i][j] === 0) ans++;
        }
    }
    
    return ans;
}
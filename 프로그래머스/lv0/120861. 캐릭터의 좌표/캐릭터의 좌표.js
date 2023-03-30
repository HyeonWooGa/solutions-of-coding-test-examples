function solution(keyinput, board) {
    const ans = [0, 0];
    const maxWidth = Math.floor(board[0] / 2);
    const maxHeight = Math.floor(board[1] / 2);
    
    keyinput.forEach((input) => {
        switch (input) {
            case 'left':
                if (maxWidth <= Math.abs(ans[0]) && ans[0] < 0) ;
                else ans[0]--;
                break;
            case 'right':
                if (maxWidth <= Math.abs(ans[0]) && ans[0] > 0) ;
                else ans[0]++;
                break;
            case 'down':
                if (maxHeight <= Math.abs(ans[1]) && ans[1] < 0) ;
                else ans[1]--;
                break;
            case 'up':
                if (maxHeight <= Math.abs(ans[1]) && ans[1] > 0) ;
                else ans[1]++;
                break;
        }
    });
    
    return ans;
}
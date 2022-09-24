function solution(lottos, win_nums) {
    let countDontKnow = 0;
    let countMatch = 0;
    
    lottos.forEach((v, i) => {
        if (v === 0) {
            countDontKnow++;
        }
        if (win_nums.includes(v)) {
            countMatch++;
        }
    })
    
    switch(countMatch) {
        case 0:
            switch(countDontKnow) {
                case 6:
                    return [1, 6]
                case 5:
                    return [2, 6]
                case 4:
                    return [3, 6]
                case 3:
                    return [4, 6]
                case 2:
                    return [5, 6]
                case 1:
                    return [6, 6]
                case 0:
                    return [6, 6]
            }
        case 1:
            switch(countDontKnow) {
                case 5:
                    return [1, 6]
                case 4:
                    return [2, 6]
                case 3:
                    return [3, 6]
                case 2:
                    return [4, 6]
                case 1:
                    return [5, 6]
                case 0:
                    return [6, 6]
            }
        case 2:
            switch(countDontKnow) {
                case 4:
                    return [1, 5]
                case 3:
                    return [2, 5]
                case 2:
                    return [3, 5]
                case 1:
                    return [4, 5]
                case 0:
                    return [5, 5]
            }
        case 3:
            switch(countDontKnow) {
                case 3:
                    return [1, 4]
                case 2:
                    return [2, 4]
                case 1:
                    return [3, 4]
                case 0:
                    return [4, 4]
            }
        case 4:
            switch(countDontKnow) {
                case 2:
                    return [1, 3]
                case 1:
                    return [2, 3]
                case 0:
                    return [3, 3]
            }
        case 5:
            switch(countDontKnow) {
                case 1:
                    return [1, 2]
                case 0:
                    return [2, 2]
            }
        case 6:
            return [1, 1];
    }
}
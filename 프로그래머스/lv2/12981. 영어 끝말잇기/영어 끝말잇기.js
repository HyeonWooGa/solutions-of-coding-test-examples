function solution(n, words) {
    const isOk = [];
    const usedWords = [];
    
    let preWord = "";
    let curWord = "";
    
    words.forEach((word, i) => {
        if (i === 0) {
            curWord = word;
            isOk.push(1);
        } else {
            preWord = curWord;
            curWord = word;
            if (preWord[preWord.length - 1] === curWord[0] && !usedWords.includes(word)) {
                isOk.push(1);
            } else {
                isOk.push(0);
            }
        }
        usedWords.push(word);
    })
    
    console.log(isOk.indexOf(0) + 1);
    return getAnswer(isOk.indexOf(0) + 1, n)
}

function getAnswer(idx, people) {
    if (idx === 0) return [0, 0]
    const who = idx % people === 0 ? people : idx % people;
    
    return [who, Math.ceil(idx / people)]
}
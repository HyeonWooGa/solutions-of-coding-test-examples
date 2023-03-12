function solution(spell, dic) {
    let ans = 2;
    
    const lengthOfSpell = spell.length;
    
    const sameLengthWords = dic.filter((word) => word.length === lengthOfSpell);
    
    sameLengthWords.forEach((word) => {
        const tempSpell = spell.slice();
        word.split('').forEach((char) => {
            if (tempSpell.includes(char)) tempSpell.splice(tempSpell.indexOf(char), 1);
            if (tempSpell.length === 0) ans = 1;
        })
    })
    
    return ans;
}
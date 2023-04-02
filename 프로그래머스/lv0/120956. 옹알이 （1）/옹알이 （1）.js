const baby = ['aya', 'ye', 'woo', 'ma'];

function solution(babbling) {
    const arr = [];
    let ans = 0;
    
    babbling.forEach((word) => {
        let temp = word;
        baby.forEach((bab) => {
            temp = temp.replaceAll(bab, ' ');
        })
        arr.push(temp);
    })
    
    arr.forEach((el) => {
        if(el.trim() === '') ans++;
    });
    
    return ans;
}
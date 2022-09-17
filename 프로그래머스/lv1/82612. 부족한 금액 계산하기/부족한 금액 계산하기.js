function solution(price, money, count) {
    const arr = Array.from(Array(count), (_, i) => price * (i + 1));
    console.log(arr);
    
    const poorMoney = arr.reduce((acc,cur) => acc + cur) - money;
    
    return poorMoney > 0 ? poorMoney : 0;
}
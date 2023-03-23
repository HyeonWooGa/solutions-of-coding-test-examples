function solution(chicken) {
    let orderChicken = chicken;
    let result = Math.floor(orderChicken / 10);
    let coupon = (orderChicken % 10) + result;
    
    while (coupon >= 10) {
        orderChicken = Math.floor(coupon / 10);
        result += orderChicken;
        coupon = (coupon % 10) + orderChicken;
    }
    
    return result;
}
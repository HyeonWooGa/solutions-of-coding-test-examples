function solution(a, b) {
    const daysOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const daysOfWeek = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    let date = 0;
    
    if (a === 1) {
        date += b;
    }
    
    else {
        date += daysOfMonth.slice(0, a - 1).reduce((acc, cur) => acc + cur);
        date += b;
    }
    
    // console.log(date, date % 7, daysOfWeek[date % 7]);
    
    return daysOfWeek[date % 7];
}
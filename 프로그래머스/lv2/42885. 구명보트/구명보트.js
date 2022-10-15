function solution(people, limit) {
    people.sort((a, b) => a - b);
    
    let left = 0;
    let right = people.length - 1;
    
    let peopleOnBoat = 0;
    let boats = 0;
    
    while(people.length > peopleOnBoat) {
        if(people[right] + people[left] <= limit) {
            peopleOnBoat++;
            left++;
        }
        
        peopleOnBoat++;
        right--;
        
        boats++;
    }
    
    return boats;
}
function solution(s) {
    const obj = {count: 0, remove: 0};
    
    while(s !== "1") {
        s = s.split("").map((char) => {
            if(char === "0") {
                obj.remove += 1;
                return "";
            } else {
                return "1";
            }
        }).join("");
        
        s = s.length.toString(2)
        obj.count += 1;
    }
    
    return [obj.count, obj.remove];
}
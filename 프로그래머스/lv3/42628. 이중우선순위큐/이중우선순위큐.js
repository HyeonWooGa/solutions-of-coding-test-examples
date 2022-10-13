function solution(operations) {
    operations = operations.map((operation) => operation.split(" "));
    const arr = [];
    
    operations.forEach((operation) => {
        arr.sort((a, b) => a - b);
        
        switch(operation[0]) {
            case "I":
                arr.push(+operation[1]);
                break;
            case "D":
                if (operation[1] === "1") {
                    arr.pop();
                }
                else {
                    arr.shift();
                }
                break;
        }
    })
    
    return arr.length === 0 ? [0, 0] : [Math.max(...arr), Math.min(...arr)];
}


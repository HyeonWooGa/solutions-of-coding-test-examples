function solution(operations) {
    operations = operations.map((operation) => operation.split(" "));
    const arr = [];
    
    operations.forEach((operation) => {
        arr.sort((a, b) => a - b);
        const num = +operation[1];
        switch(operation[0]) {
            case "I":
                arr.push(num);
                break;
            case "D":
                if (num === 1) {
                    arr.pop();
                }
                else {
                    arr.shift();
                }
                break;
        }
    })
    console.log(arr);
    
    return arr.length === 0 ? [0, 0] : [Math.max(...arr), Math.min(...arr)];
}


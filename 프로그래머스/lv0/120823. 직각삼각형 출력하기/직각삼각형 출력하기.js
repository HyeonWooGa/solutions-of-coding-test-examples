const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let numOfStar = 1;
    let line = '';
    for(let i = 0; i < Number(input); i++) {
        for(let j = 0; j < numOfStar; j++) {
            line += '*';
        }
        console.log(line);
        line = '';
        numOfStar++;
    }
});
const fs = require("fs");
let [n, ...people] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

people = people.map(person => person.split(" ").map(Number));
let result = [];

people.forEach((_, i) => {
	let grade = 1;
	people.forEach((_, j) => {
		if (i !== j) {
			if (people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
                grade++;
            }
		}
	})
	result.push(grade);
})

console.log(result.join(" "));
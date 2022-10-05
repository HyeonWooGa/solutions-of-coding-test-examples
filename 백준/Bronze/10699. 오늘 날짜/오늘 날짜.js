const date = new Date();
const year = date.getFullYear();
const month = ("0" + (1 + date.getMonth())).slice(-2);
const day = ("0" + (date.getDate())).slice(-2);

console.log(`${year}-${month}-${day}`);
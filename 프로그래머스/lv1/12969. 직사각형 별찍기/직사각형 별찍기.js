process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [a, b] = data.split(" ").map(Number);
    
    const star = ("*".repeat(a)+"\n").repeat(b);
    
    console.log(star);
});
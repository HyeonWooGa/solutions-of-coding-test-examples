function solution(quiz) {
    return quiz.map((test) => {
        const [calc, res] = test.split(' = ');
        const sign = calc.includes('+') ? 1 : -1
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

        return +a + (+b * sign) === +res ? 'O' : 'X'
    });
}
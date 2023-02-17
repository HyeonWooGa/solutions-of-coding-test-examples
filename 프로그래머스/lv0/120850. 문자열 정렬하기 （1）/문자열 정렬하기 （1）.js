function solution(my_string) {
    const ans = [];
    
    my_string.split('').forEach((char) => {
        if ('0123456789'.split('').includes(char)) ans.push(Number(char));
    });
    
    return ans.sort();
}
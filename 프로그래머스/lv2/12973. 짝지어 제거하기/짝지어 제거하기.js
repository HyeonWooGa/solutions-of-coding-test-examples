function solution(s)
{
    let index = 0;
    let slicedStr = s.split('');
    const result = [];
    
    while(index < slicedStr.length) {
        if (slicedStr[index] === slicedStr[index+1] && slicedStr.length !== 0) {
            index += 2;
        } 
        else {
            if (result[result.length - 1] !== slicedStr[index])
                {
                    result.push(slicedStr[index]);
                }
            else {
                result.pop();
            }
            index += 1;
        }
    }
    
    return result.length === 0 ? 1 : 0
}
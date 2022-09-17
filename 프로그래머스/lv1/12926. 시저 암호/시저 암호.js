// 증감 조건  1) 대문자(65-90) 2) 소문자 (97-122)
// 추가 조건  1) 122 초과 || (90 초과 && 97 미만) , - 16

function solution(s, n) {
    const arr = [];
    
    for(let i = 0; i < s.length; i++) {
      let uniCodeChar = s.charCodeAt(i);
      let changedUniCodChar = "";
      // console.log(uniCodeChar);
      if (uniCodeChar >= 65 && uniCodeChar <= 90) {
        changedUniCodChar = uniCodeChar + n;
        if(changedUniCodChar > 90) changedUniCodChar -= 26;
      } else if (uniCodeChar >= 97 && uniCodeChar <= 122) {
        changedUniCodChar = uniCodeChar + n;
        if(changedUniCodChar > 122) changedUniCodChar -= 26;
    }
          
        if(changedUniCodChar === "") arr.push(" ");
        else arr.push(String.fromCharCode(changedUniCodChar));
    }
    
  
  return arr.join('');
}
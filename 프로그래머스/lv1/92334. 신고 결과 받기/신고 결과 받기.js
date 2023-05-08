/* // 의사코드 
// 1. {유저 ID: [유저가 신고한 ID]} 의 형태로된 객체 whoReport를 전달인자 report 를 참고하여 만듭니다.
// 2. whoReport 객체의 value 값들을 참고하여 whoBeReported 객체를 {유저 ID: [유저가 신고당한 횟수]} 를 만듭니다.
// 3. whoBeReported 객체를 탐색하여 value 가 k 이상인 경우를 확인합니다.
// 4. 

function solution(id_list, report, k) {
    const obje = {};
    const arrReport = report.map((el) => el.split(' '));
    const getReport = id_list.map((el) => [el, 0]);

    id_list.forEach((el) => obje[el] = []);
    arrReport.forEach((el) => obje[el[0]].push(el[1]));

    const beReportedDup = Object.values(obje).flat();

    getReport.forEach((num1) => {
        beReportedDup.forEach((num2) => {
            if(num1[0] === num2) num1[1]++; 
        })
    })

    const beBaned = getReport.filter((el) => el[1] >= k);

    getReport.forEach((el) => el[1] = 0);

    getReport.forEach((el1) => {
        beBaned.forEach((el2) => {
            if(obje[el1[0]].includes(el2[0])) el1[1]++;
        })
    })

    const answer = getReport.map((el) => el[1]);
    
    return answer;
}
*/
function solution(id_list, report, k) {
    const answer = new Array(id_list.length);
    answer.fill(0) 
    const report_list = {} //
    
    
    id_list.map((user)=>{
        report_list[user] = [] //key로 userid를 value로 빈 배열을 가지는 객체
    })
    
    report.map((user)=>{
        const [user_id, report_id] = user.split(' ')
        if(!report_list[report_id].includes(user_id)){
            report_list[report_id].push(user_id)
        }        
    })
    
    for(const key in report_list){
        if(report_list[key].length >= k){ //이용정지 유저
            report_list[key].map((user)=>{
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
    return answer;
}
// 문제
//// 실패율을 구하는 문제, 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
//// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수 : 스테이지 도달 && !스테이지 클리어

// 입력
//// 1) N:number, 전체 스테이지의 개수 (1<=N<=500, 자연수)
//// 2) stages:number[], 유저가 현재 멈춰있는 스테이지의 번호가 담긴 배열 (1<=stages.length<=200,000)
////// stages 의 요소는 1 이상 N+1 이하의 자연수가 담겨있고, N+1 은 마지막 스테이지(N 번쨰 스테이지) 까지 클리어한 유저를 나타냄

// 출력
//// 1) result:number[], 실패율이 높은  스테이지부터 내림차순으로 스테이지 번호가 담겨있는 배열

// 주의사항
//// 1) 실패율이 같은 스테이지가 있으면 자은 번호의 스테이지가 먼저 오도록 합니다.
//// 2) 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 입니다.

// 의사코드
// _1) '각 스테이지'의 도달한 플레이어 수 _2) '각 스테이지'를 클리어한 플레이어 수 데이터를 이용합니다.
//// 1) 첫 번째 요소는 비우고 길이가 N + 1 인 배열을 두개 생성합니다. (_1, _2 의 데이터 관리위해)
//// 2) 첫 번째 요소는 비우고 길이가 N + 1 인 배열을 생성하여 각 스테이지의 실패율을 저장합니다.
//// 3) Math.min(), indexOf(), 2 를 사용하여 실패욜이 높은 스테이지부터 삭제하면서 해당 인덱스를 새로운 배열에 저장합니다.
//// 4) 3에서 생성된 배열을 반환합니다.

function solution(N, stages) {
    // 1)
    const playersArriveStages = Array.from(Array(N + 1), () => 0); playersArriveStages[0] = null;
    const playersClearStages = Array.from(Array(N + 1), () => 0); playersClearStages[0] = null;
    
    stages.forEach((arrive) => {
        if (arrive > N) {
            for (let i =1; i < arrive; i++) {
                playersClearStages[i] += 1;
                playersArriveStages[i] += 1;
            }
        } else {
            for (let i = 1; i <= arrive; i++) {
                if(i !== arrive) {
                    playersClearStages[i] += 1;
                }
                playersArriveStages[i] += 1;
            }
        }
    });
    
    console.log(playersClearStages);
    console.log(playersArriveStages);
    
    // 2)
    const stagesFailRate = [-1];
    
    for (let i = 1; i <= N; i++) {
        if (playersArriveStages[i] === 0) {
            stagesFailRate[i] = 0
        } else {
            stagesFailRate[i] = 1 - playersClearStages[i] / playersArriveStages[i];
        }
    }
    
    console.log(stagesFailRate);
    
    // 3)
    const result = [];
    
    for (let i = 1; i <= N; i++) {
        const max = Math.max(...stagesFailRate);
        const idx = stagesFailRate.indexOf(max);
        stagesFailRate[idx] = -1;
        
        result.push(idx);
    }
    
    // 4)
    return result;
}
/*
 * 2020.07.04
 * Level 2
 * 프로그래머스 - 다음 큰 숫자
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(n) {
    var answer = n;
    const oneCnt = returnOneCnt(n);
    
    while(1){
        answer += 1;
        const answer_oneCnt = returnOneCnt(answer);
        if(answer_oneCnt==oneCnt){
            break;
        }
    }
    
    return answer;
}

function returnOneCnt(num){
    num = num.toString(2);
    return num.match(/1/g).length;
}
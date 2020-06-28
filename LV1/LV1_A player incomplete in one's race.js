/*
 * 2020.06.28
 * Level 1
 * 프로그래머스 - 완주하지 못한 선수
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(participant, completion) {
    participant = participant.sort();
    completion = completion.sort();
    
    for(var i=0;i<participant.length;i++){
        if(participant[i]!=completion[i]){
            return participant[i];
        }
    }
}
/*
 * 2020.07.30
 * Level 2
 * 프로그래머스 - 최대값과 최소값
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(s) {
    var answer = '';
    
    let max = s.split(" ").reduce(function(ac,cu){
        return Math.max(ac,cu);
    });
    
    let min = s.split(" ").reduce(function(ac,cu){
        return Math.min(ac,cu);
    });
    
    answer = `${min} ${max}`
    
    return answer;
}
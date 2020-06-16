/*
 * 2020.05.31
 * Level 1
 * 프로그래머스 - 문자열 다루기 기본
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(s) {
    var answer = true;
    
    if(s.length!=4 && s.length!=6){
        return false;
    }
    
    var reg = /^[0-9]*$/g;
    
    answer = reg.test(s);
    
    return answer;
}
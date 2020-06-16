/*
 * 2020.05.30
 * Level 1
 * 프로그래머스 - 문자열 내 p와 y의 개수
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(s){
    var answer = true;
    s = Array.from(s.toLowerCase());
    
    var pCnt = s.filter(function(val){
       return val=='p'?true:false; 
    }).length;
    
    var yCnt = s.filter(function(val){
       return val=='y'?true:false; 
    }).length;

    if(pCnt==yCnt){
        answer = true;
    }else{
        answer = false;
    }
    
    return answer;
}
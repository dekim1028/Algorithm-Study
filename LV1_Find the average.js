/*
 * 2020.06.11
 * Level 1
 * 프로그래머스 - 평균 구하기
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(arr) {
    var answer = 0;
    
    answer=arr.reduce(function(ac,c){
       return ac+c; 
    })/arr.length;
    
    return answer;
}
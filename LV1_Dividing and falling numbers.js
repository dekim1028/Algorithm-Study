/*
 * 2020.05.26
 * Level 1
 * 프로그래머스 - 나누어 떨어지는 숫자배열
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(arr, divisor) {
    var answer = [];
    
    arr.sort(function(a,b){
        return a-b;
    });
    
    answer =  arr.filter(function(val){
       if(val%divisor==0) {
           return true;
       }else{
           return false;
       }
    });
   
    if(answer.length==0){
        answer.push(-1);
    }
    
    return answer;
}
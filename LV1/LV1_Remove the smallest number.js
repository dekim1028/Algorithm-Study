/*
 * 2020.06.11
 * Level 1
 * 프로그래머스 - 제일 작은 수 제거하기
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(arr) {
    var answer = [];
    
    if(arr.length==1){
        answer.push(-1);
    }else{
        var min = arr.reduce(function(pre,c){
           return pre>c?c:pre; 
        });
        
        answer = arr.filter(function(val){
           if(val!=min) {
               return true;
           }
        });
    }

    return answer;
}
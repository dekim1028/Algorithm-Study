/*
 * 2020.06.11
 * Level 1
 * 프로그래머스 - 하샤드 수
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(x) {
    var answer = true;
    const xArr = x.toString().split("");
    
    const sum=xArr.reduce(function(ac,c){
       return Number(ac)+Number(c);
    });
    
    answer = x%sum==0?true:false;
    
    return answer;
}
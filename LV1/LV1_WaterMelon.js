/*
 * 2020.05.27
 * Level 1
 * 프로그래머스 - 수박수박수박수박수박수?
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(n) {
    var answer = '';
    
    for(var i=1;i<=n;i++){
        if(i%2==0){
            answer +='박';
        }else{
            answer +='수';
        }
    }
    
    return answer;
}
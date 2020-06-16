/*
 * 2020.06.12
 * Level 1
 * 프로그래머스 - 예산
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(d, budget) {
    var answer = 0;
    
    d=d.sort(function(a,b){
        return a-b;
    });
    
    for(var i=0;i<d.length;i++){
        if(budget-d[i]<0){
            break;
        }else{
            answer++;
            budget -= d[i];
        }
    };
    
    return answer;
}
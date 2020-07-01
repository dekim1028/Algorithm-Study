/*
 * 2020.07.01
 * Level 2
 * 프로그래머스 - H-Index
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(citations) {
    var answer = 0;
    const max = Math.max(...citations);
    
    for(var i=max;i>=0;i--){
        const index = citations.filter(function(val){
            return val>=i;
        }).length;
        
        if(index>=i){
            answer = i;
            break;
        }
    }
    
    return answer;
}
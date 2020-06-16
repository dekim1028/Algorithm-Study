/*
 * 2020.06.14
 * Level 1
 * 프로그래머스 - 실패율
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(N, stages) {
    let answer = [];
    let failureRate = [];
    
    for(var i=1;i<=N;i++){
        const challengeCnt = stages.filter(function(val){
            return val>=i;
        }).length;
        
        const failCnt = stages.filter(function(val){
            return val==i;
        }).length;

        if(challengeCnt==0){
            failureRate.push([i,0]);
        }else{
            failureRate.push([i,failCnt/challengeCnt]);
        }
    }
    
    failureRate = failureRate.sort(function(a,b){
       return a[1]==b[1]?a[0]-b[0]:b[1]-a[1];
    });
    
    answer = failureRate.map(function(val){
        return val[0];
    });
    
    return answer;
}
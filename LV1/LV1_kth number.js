/*
 * 2020.06.06
 * Level 1
 * 프로그래머스 - k번째 수
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(array, commands) {
    var answer = [];
    
    for(var x=0;x<commands.length;x++){
        const i = commands[x][0]-1;
        const j = commands[x][1];
        const k = commands[x][2]-1;
        
        let sliceArr = array.slice(i,j).sort(function(a,b){
            return a-b;
        });
        
        answer.push(sliceArr[k]);
    }
    
    return answer;
}
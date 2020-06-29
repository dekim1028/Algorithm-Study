/*
 * 2020.06.29
 * Level 2
 * 프로그래머스 - 기능개발
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(progresses, speeds) {
    var answer = [];
    
    var date = [];
    for(var i=0;i<progresses.length;i++){
        date.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    
    var bapoCnt=1;
    var target = date[0];
    for(var i=1;i<date.length;i++){
        if(target>=date[i]){
            bapoCnt ++;
        }else{
            answer.push(bapoCnt);
            bapoCnt = 1;
            target = date[i];
        }
    }
    
    answer.push(bapoCnt);

    return answer;
}
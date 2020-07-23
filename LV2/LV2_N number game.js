/*
 * 2020.07.23
 * Level 2
 * 프로그래머스 - [3차] n진수 게임
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(n, t, m, p) {
    var answer = '';
    
    let num = -1;
    let turn = 1;
    let stack = [];
    while(t>0){
        
        if(stack.length==0){
            num++;
            stack = num.toString(n).split('');
        }
        
        if(turn == p){
            answer += stack.shift();
            t--;
        }else{
            stack.shift();
        }
        
        turn==m? turn=1: turn++;
        
    }
    
    return answer.toUpperCase();
}
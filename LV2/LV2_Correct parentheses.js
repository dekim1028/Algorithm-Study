/*
 * 2020.07.26
 * Level 2
 * 프로그래머스 - 올바른 괄호
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(s){
    var answer = true;
    
    var sArr=s.split("");
    var stack = [];
    
    for(var i=0;i<sArr.length;i++){
        if(sArr[i]=='('){
            stack.push("(");
        }else{
            if(stack.shift()==undefined){
                answer = false;
                break;
            }
        }
    } 
    
    if(stack.length>0){
        answer = false;
    }

    return answer;
}
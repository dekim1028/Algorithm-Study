/*
 * 2020.06.22
 * Level 2
 * 프로그래머스 - 쇠막대기
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(arrangement) {
    var answer = 0;
    var stack = [];
    
    for(var i=0;i<arrangement.length;i++){
        if(arrangement[i]==='('){
            stack.push(arrangement[i]);
        }else{
            stack.pop();
            if(arrangement[i-1]==='('){
                answer += stack.length;
            }else{
                answer += 1;
            }
        }
    }
    
    return answer;
}
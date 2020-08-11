/*
 * 2020.08.11
 * Level 2
 * 프로그래머스 - 타겟 넘버
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(numbers, target) {
    var answer = 0;
    
    function recur(idx, sum){
        
        if(idx===numbers.length){
            if(sum===target){
                answer++;
            }
            return;
        }
        
        recur(idx+1, sum+numbers[idx]);
        recur(idx+1, sum-numbers[idx]);
    }
    
    recur(0,0);
    
    return answer;
}


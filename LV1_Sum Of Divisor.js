/*
 * 2020.06.06
 * Level 1
 * 프로그래머스 - 약수의 합
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(n) {
    var answer = 0;
    
    if(n>0){
        let arr = Array.from({length: n}, (_, i) => 1 + i);

        answer = arr.reduce(function(accumulator, currentValue){
            if(n%currentValue==0){
                return accumulator+currentValue;
            }else{
                return accumulator;
            }
        });
    }
    
    return answer;
}
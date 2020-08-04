/*
 * 2020.08.04
 * Level 2
 * 프로그래머스 - 가장 큰 수
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(numbers) {
    var answer = numbers.map(val=>val.toString()).sort((a,b)=>(b+a)-(a+b)).join('');
    
    return answer[0]==='0'?'0':answer;
}
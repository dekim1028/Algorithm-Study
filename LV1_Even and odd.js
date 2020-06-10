/*
 * 2020.06.11
 * Level 1
 * 프로그래머스 - 짝수와 홀수
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(num) {
    var answer = num%2==0?"Even":"Odd";
    return answer;
}
/*
 * 2020.06.11
 * Level 1
 * 프로그래머스 - x만큼 간격이 있는 n개의 숫자
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(x, n) {
    var answer = Array.from({length:n},(_,i)=>x+(i*x));
    return answer;
}
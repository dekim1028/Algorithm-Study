/*
 * 2020.05.27
 * Level 1
 * 프로그래머스 - 문자열 내림차순으로 배치하기
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(s) {
    var answer = '';
    var sArr = Array.from(s);
    
    sArr.sort(function(a,b){
        return a>b?-1:a==b?0:1;
    })
    
    answer = sArr.join('');
    
    return answer;
}
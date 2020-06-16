/*
 * 2020.06.03
 * Level 1
 * 프로그래머스 - 자연수 뒤집어 배열로 만들기
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(n) {
    var answer = [];
    
    var nArr = n.toString().split("").map(function(val){
        return Number(val);
    });
    
    answer = nArr.reverse();
    
    return answer;
}
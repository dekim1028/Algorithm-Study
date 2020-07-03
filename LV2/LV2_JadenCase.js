/*
 * 2020.07.03
 * Level 2
 * 프로그래머스 - JadenCase 문자열 만들기
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(s) {
    var answer = '';
    
    answer = s.split(" ").map(function(val){
        val = val.split("").map(function(val,i){
            if(i==0){
                return val.toUpperCase();
            }else{
                return val.toLowerCase();
            }
        }).join("");
        
        return val;
    }).join(" ");
    
    return answer;
}
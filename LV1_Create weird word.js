/*
 * 2020.06.04
 * Level 1
 * 프로그래머스 - 이상한 문자 만들기
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(s) {
    var answer = '';
    var sArr =s.split(" ");
    
    answer = sArr.map(function(val){
        var word = val.split("").map(function(wVal,i){
            if(i%2==0){
                return wVal.toUpperCase();
            }else{
                return wVal.toLowerCase();
            }
        });
        return word.join('');
    }).join(' ');

    return answer;
}
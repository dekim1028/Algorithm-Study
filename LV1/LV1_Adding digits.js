/*
 * 2020.06.09
 * Level 1
 * 프로그래머스 - 자릿수 더하기
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(n)
{
    var answer = 0;
    const nArr = n.toString().split("");
    
    answer=nArr.reduce(function(sum,val){
        return Number(sum) + Number(val);
    });
    
    return Number(answer);
}
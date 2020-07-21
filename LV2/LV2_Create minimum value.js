/*
 * 2020.07.21
 * Level 2
 * 프로그래머스 - 최소값 만들기
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(A,B){
    var answer = 0;

    A = A.sort(function(a,b){
        return a-b;
    });
    
    B = B.sort(function(a,b){
        return b-a;
    });

    answer = A.reduce(function(ac,cu,i){
        return ac + (cu * B[i]);
    },0);
    
    return answer;
}
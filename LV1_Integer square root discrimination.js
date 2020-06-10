/*
 * 2020.06.10
 * Level 1
 * 프로그래머스 - 정수 제곱근 판별
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(n) {
    const sqrt = Math.sqrt(n);
    if(Number.isInteger(sqrt) && sqrt>0){
        return Math.pow(sqrt+1,2);
    }else{
        return -1;
    }  
}
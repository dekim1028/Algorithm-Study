/*
 * 2020.08.06
 * Level 2
 * 프로그래머스 - 124 나라의 숫자
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(n) {
    let answer = '';
    
    while(n>0){
        if(n%3==0){
            answer = `4${answer}`;
            n = n/3 -1;  
        }else if(n%3==1){
            answer = `1${answer}`;
            n = Math.floor(n/3);
        }else{
            answer = `2${answer}`;
            n = Math.floor(n/3);
        }
    }
    
    return answer;
}
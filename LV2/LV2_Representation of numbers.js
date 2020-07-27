/*
 * 2020.07.27
 * Level 2
 * 프로그래머스 - 숫자의 표현
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(n) {
    var answer = 0;
    
    let startNum = n;
    while(startNum > 0){
        answer += routin(startNum, n);
        startNum--;
    }
    
    return answer;
}

function routin(num, sum){
    
    while(num>0 && sum > 0){
        sum -= num;

        if(sum==0){
           return 1;
        }else{
            num--;
        }
    }
    
    return 0;
}
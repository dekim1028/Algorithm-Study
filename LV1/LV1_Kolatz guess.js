/*
 * 2020.06.11
 * Level 1
 * 프로그래머스 - 콜라츠 추측
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(num) {
    var answer = 0;
    
    while(num!=1){
        if(num%2==0){
            num = num/2;
        }else{
            num = num*3+1;
        }
        answer++;
        if(answer==500){
            answer=-1;
            break;
        }
    }
    
    return answer;
}
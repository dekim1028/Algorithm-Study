/*
 * 2020.06.11
 * Level 1
 * 프로그래머스 - 핸드폰 번호 가리기
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(phone_number) {
    let arr = phone_number.split("");
    
    for(var i=0;i<arr.length-4;i++){
        arr[i]="*";
    }
    
    const answer = arr.join("");
    
    return answer;
}
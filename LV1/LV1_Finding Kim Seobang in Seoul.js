/*
 * 2020.05.27
 * Level 1
 * 프로그래머스 - 서울에서 김서방 찾기
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(seoul) {
    var answer = '';
    var arr = seoul.filter(function(val,i){
       if(val=='Kim'){
           answer =i;
           return true;
       }else{
           return false;
       }
    });

    return '김서방은 '+answer+'에 있다';
}
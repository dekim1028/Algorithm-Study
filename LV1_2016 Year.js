/*
 * 2020.06.01
 * Level 1
 * 프로그래머스 - 2016년
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(a, b) {
    var answer = '';
    
    var day = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var date = new Date(`2016.${a}.${b}`);
    
    answer=day[date.getDay()];
    
    return answer;
}
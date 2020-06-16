/*
 * 2020.05.26
 * Level 1
 * 프로그래머스 - 가운데 글자 가져오기
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(s) {
    var answer = '';
    
    var word = Array.from(s);
    var len = word.length;
    
    const mid = Math.floor(len/2);
    if(len%2==0){
        answer = s.substring(mid-1,mid+1);
    }else{
        answer = word[mid];
    }
    
    return answer;
}
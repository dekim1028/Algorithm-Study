/*
 * 2020.05.26
 * Level 1
 * 프로그래머스 - 문자열 내 마음대로 정렬하기
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(strings, n) {
    var answer = [];
    
    answer=strings.sort(function(a,b){
        var str1 = a.substring(n,n+1);
        var str2 = b.substring(n,n+1);
        
        if(str1<str2){
            return -1;
        }else if(str1 == str2){
            return a<b?-1:(a==b?0:1); 
        }else{
            return 1; 
        }
    });
    
    return answer;
}
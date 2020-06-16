/*
 * 2020.06.06
 * Level 1
 * 프로그래머스 - 시저 암호
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(s, n) {
    let answer = '';
    
    for(var i=0;i<s.length;i++){
        if(s.charAt(i)!=" "){
            const upperCaseChk = /[A-Z]/.test(s.charAt(i));
            let unicode = s.charCodeAt(i) + n;

            if(upperCaseChk){ // 대문자
                if(unicode>90){
                    unicode -= 26; 
                }
            }else{ // 소문자
                if(unicode>122){
                    unicode -= 26; 
                }
            }

            answer += String.fromCharCode(unicode);
        }else{
            answer += ' ';
        }
    }
    
    return answer;
}
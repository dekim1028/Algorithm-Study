/*
 * 2020.05.25
 * Level 1
 * 프로그래머스 - 두 정수 사이의 합
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(a, b) {
    var answer = 0;
    
    if(a>b){ // a, b 대소 정렬
        var temp = b;
        b=a;
        a=temp;
    }
    
    //시퀀스 생성
    const range = Array.from({ length: (b - a)+1}, (_, i) => a + i);
    
    //합 구하기
    answer=range.reduce(sum);
    
    return answer;
}

function sum(val1,val2){
    return val1+val2;
}
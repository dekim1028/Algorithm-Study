/*
 * 2020.07.29
 * Level 2
 * 프로그래머스 - 피보나치 수
 */

// 첫번째 로직 : 정확성 통과, 효율성 실패
/*function solution(n) {
    var answer = 0;
    
    answer = Fibonacci(n);
    
    return answer;
}

function Fibonacci(n){
    if(n>2){
        return Fibonacci(n-1) + Fibonacci(n-2);
    }else{
        return 1;
    }
}*/

/*
 * 2020.07.29
 * Level 2
 * 프로그래머스 - 피보나치 수
 */

 // 두번째 로직 : 정확성 통과, 효율성 통과
 function solution(n) {
    var answer = 0;
    
    var F1=0, F2=1;
    for(var i=2;i<=n;i++){
        answer = (F1+F2)%1234567;
        F1 = F2%1234567;
        F2 = answer%1234567;
    }
    
    return answer;
}
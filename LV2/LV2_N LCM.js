/*
 * 2020.07.28
 * Level 2
 * 프로그래머스 - N개의 최소공배수
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(arr) {
    var answer = 0;
    
    arr=arr.sort(function(a,b){
        return b-a;
    });
    
    let num1 = arr[0];
    for(var i=1;i<arr.length;i++){
        num1 = getLCM(num1,arr[i]);
    }
    
    answer = num1;
    
    return answer;
}

function getLCM(a,b){
    let lcm = a*b/getGCD(a,b);
    return lcm;
}

function getGCD(a,b){
    let temp = a%b;
    
    if(temp==0){
        return b;
    }else{
        a = b;
        b = temp;
        return getGCD(a,b);
    } 
}

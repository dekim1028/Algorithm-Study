/*
 * 2020.06.11
 * Level 1
 * 프로그래머스 - 최대공약수와 최소공배수
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(n, m) {
    let answer = [];
    
    let min = Math.min(n, m);
    let max = Math.max(n, m);
    
    answer.push(GCF_function(min,max));
    answer.push(LCM_function(min,max));
    
    return answer;
}

//최대 공약수
function GCF_function(min,max){
    return min%max==0?max:GCF_function(max,min%max);
}

//최소공배수
function LCM_function(min,max){
    let cnt=1;
    let target = min*cnt;
    while(true){
        target = min*cnt;
        if(target%min==0&&target%max==0){
            return target;
        }
        cnt++;
    }
}
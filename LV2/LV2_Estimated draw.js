/*
 * 2020.07.18
 * Level 2
 * 프로그래머스 - 예상 대진표
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(n,a,b)
{
    var answer = 1;

    while(1){
        
        if(checkMatch(a,b)){
            break;
        }
        
        a = getRound(a);
        b = getRound(b);
        
        answer++;
    }

    return answer;
}

function getRound(num){
    if(num%2==0){
        num = num/2;
    }else{
        num = Math.ceil(num/2);
    }
    
    return num;
}

function checkMatch(a,b){
    
    if(a>b){
        if(a%2==0 && a-1==b){
            return true;
        }else{
            return false;
        }
    }else{
        if(a%2==1 && a+1==b){
            return true;
        }else{
            return false;
        }
    }
}
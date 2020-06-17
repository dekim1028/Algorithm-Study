/*
 * 2020.06.17
 * Level 2
 * 프로그래머스 - 프린터
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(priorities, location) {
    let answer = 0;
    
    priorities=priorities.map(function(val,i){
        return [i,val];
    });

    while(priorities){
        const target = priorities.shift();
        const check = priorities.filter(function(val){
            return val[1]>target[1];
        }).length>0?true:false;
        
        if(check){
            priorities.push(target);
        }else{
            answer ++;
            if(target[0]==location){
                break;
            }
        }
    }
   
    return answer;
}
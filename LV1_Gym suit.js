/*
 * 2020.06.08
 * Level 1
 * 프로그래머스 - 체육복
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(n, lost, reserve) {
    var answer = 0;
    let studentArr = Array.from({length:n},(_,i)=>1+i);
    
    answer = studentArr.filter(function(val, i){
        //체육복 잃어버렸는지 체크
        const lostChk = lost.indexOf(val)>-1?true:false;
        
        //여분의 체육복있는지 체크
        const reserveChk = reserve.indexOf(val)>-1?true:false; 
        
        if(lostChk && reserveChk){
            reserve[reserve.indexOf(val)]=0;
            return true;
        }
        
        if(lostChk){
            for(var x=0;x<reserve.length;x++){
                if(reserve[x]==val-1){
                    reserve[x]=0;
                    return true;
                }else{
                    if(reserve[x]==val+1 && lost.indexOf(reserve[x])<0){
                        reserve[x]=0;
                        return true;
                    }
                }
            }
            
            return false;
        }else{
            return true;
        }
    }).length;
    
    return answer;
}
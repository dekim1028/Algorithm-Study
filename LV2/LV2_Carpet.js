/*
 * 2020.08.13
 * Level 2
 * 프로그래머스 - 카펫
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(brown, yellow) {
    var answer = [];
    let flag = false;
    
    for(var i=1;i<=yellow;i++){
        for(var j=1;j<=i;j++){
            if(i*j===yellow){
                if (brown === (((i+2) * 2) + (j * 2))){
                    answer = [i+2,j+2];
                    flag = true;
                    break;
                }
            }
        }
        
        if(flag) break;
    }
    
    return answer;
}
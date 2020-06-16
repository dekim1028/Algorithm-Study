/*
 * 2020.06.16
 * Level 2
 * 프로그래머스 - 탑
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(heights){
    var answer = [];
    
    for(var i=0;i<heights.length;i++){
        for(var j=i;j>=0;j--){
            if(heights[j]>heights[i]){
                answer.push(j+1);
                break;
            }else{
                if(j==0){
                    answer.push(0);
                }
            }
        }
    }
    
    return answer;
}
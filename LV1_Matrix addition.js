/*
 * 2020.06.11
 * Level 1
 * 프로그래머스 - 행렬의 덧셈
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(arr1, arr2) {
    var answer = [[]];
    
    answer=arr1.map(function(val,i){
        let arr=val.map(function(val2,j){
            return val2+arr2[i][j];
        });
        return arr;
    });
    
    
    return answer;
}
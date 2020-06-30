/*
 * 2020.06.30
 * Level 2
 * 프로그래머스 - 행렬의 곱셈
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(arr1, arr2) {
    var answer = [[]];
    
    answer=arr1.map(function(val,i){
        let arr = [];
        for(var j=0;j<arr2[0].length;j++){
            let sum = 0;
            for(var x=0;x<arr2.length;x++){
                sum+=val[x]*arr2[x][j];
            }
            arr.push(sum);
        }
        return arr
    })
    
    return answer;
}
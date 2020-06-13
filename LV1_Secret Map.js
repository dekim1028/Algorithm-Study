/*
 * 2020.06.13
 * Level 1
 * 프로그래머스 - [1차] 비밀지도
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(n, arr1, arr2) {
    var answer = [];
    
    const decrypt1 = decodeMap(n,arr1);
    const decrypt2 = decodeMap(n,arr2);

    answer=decrypt1.map(function(arr,i){
        arr=arr.map(function(val,j){
            if(val=="1" || decrypt2[i][j]=="1"){
                return "#";
            }
            return " ";
        });
        return arr.join("");
    });
    
    return answer;
}

function decodeMap(n,array){
    const decrypt = array.map(function(val){
        const arr = val.toString(2).split("");
        const limit =n-arr.length;
        for(var i=0;i<limit;i++){
            arr.unshift("0");
        }
        
        return arr;
    });
    
    return decrypt;
}
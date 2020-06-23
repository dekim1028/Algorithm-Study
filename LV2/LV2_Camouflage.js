/*
 * 2020.06.23
 * Level 2
 * 프로그래머스 - 위장
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(clothes) {
    var obj ={};
    clothes.forEach(function(element){
        if(obj[element[1]]>=1){
            obj[element[1]]+=1;
        }else{
            obj[element[1]]=1;
        }
    });

    var answer = 1;
    for(var i in obj){
        answer *= (obj[i]+1);
    }

    return answer-1;
}
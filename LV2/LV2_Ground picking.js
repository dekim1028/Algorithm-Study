/*
 * 2020.08.09
 * Level 2
 * 프로그래머스 - 땅따먹기
 */

// 첫번째 로직 : 정확성 통과, 효율성 미통과
function solution(land) {
    var answer = 0;

    for(let i=1;i<land.length;i++){
        land[i] = land[i].map(function(val,index){
            let max = getMax(land.filter((val,j)=>j==i-1)[0],index);
            return val+max;
        });
    }
    
    answer = land[land.length-1].reduce(function(ac,cu){
        return Math.max(ac,cu);
    })

    return answer;
}

function getMax(numArr,i){
    
    numArr = numArr.filter(function(val,index){
       return index!=i; 
    });
    
    let max = numArr.reduce(function(ac,cu){
        return Math.max(ac,cu);
    });

    return max;
}
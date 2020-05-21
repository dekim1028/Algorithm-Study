/*
 * 2020.05.21
 * Level 1
 * 프로그래머스 - 같은 숫자는 싫어
 */


function solution(arr)
{
    var answer = [];

    // 첫번째 로직 : 정확성 통과, 효율성 미통과
    /*while(arr.length){
        var now = arr.shift();
        var target = null;
        
        if(answer.length>0){
            target = answer.pop();
        }else{
            answer.push(now);
            continue;
        }

        answer.push(target);
        if(target!=null && target!=now){
            answer.push(now);
        }
        
    }*/

    // 두번째 로직 : 정확성 통과, 효율성 통과
    answer=arr.filter(function(val,index,arr){
        return val != arr[index-1];
    });
    
    return answer;
}
/*
 * 2020.07.08
 * Level 2
 * 프로그래머스 - 영어 끝말잇기
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(n, words) {
    var answer = [];

    let i=0;
    while(i < words.length){
        if(failCheck(i,words)){ //탈락
            answer.push(i%n+1);
            answer.push(parseInt(i/n)+1);
            break;
        }else{
            i++;
        }
    }

    if(answer.length==0){
        answer.push(0);
        answer.push(0);
    }
    
    return answer;
}

function failCheck(i,words){
    let result = false;
    const target = words[i];
    
    result = words.filter(function(val,index){
       if(index<i && val==target){
           return true;
       } 
    }).length>0?true:false;
    
    if(!result && i>0){ 
        if(words[i-1].charAt(words[i-1].length-1) == words[i].charAt(0)){
            result = false;
        }else{
            result = true;
        }
    }
    
    return result;
}
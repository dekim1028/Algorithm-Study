/*
 * 2020.06.14
 * Level 1
 * 프로그래머스 - 다트게임
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(dartResult) {
    var answer = 0;
    const dartArr = dartResult.split("");
    let scoreArr = [];
    
    for(var i=0;i<dartArr.length;i++){
        let score = dartArr[i];
        let bonus = 0;
        let option = 1;
        let chkTen = false;
        
        if(/[0-9]/.test(dartArr[i+1])){
           chkTen = true;
           score += dartArr[i+1];
           bonus = getBonus(dartArr[i+2]);
           option = getOption(dartArr[i+3]);
        }else{
           bonus = getBonus(dartArr[i+1]);
           option = getOption(dartArr[i+2]);
        }
        
        scoreArr.push(Math.pow(score,bonus));
        
        if(option==2){
            for(var j=scoreArr.length-1;j>=scoreArr.length-2;j--){
                scoreArr[j]*=2;
            }
            i++;
        }else if(option==-1){
            scoreArr.push(scoreArr.pop()*option);
            i++;
        }
        
        if(chkTen){
            i=i+2;
        }else{
            i=i+1;
        }
    }

    answer=scoreArr.reduce(function(au,c){
       return au+c; 
    });
    
    return answer;
}

function getBonus(bonus){
    switch(bonus){
        case 'S': return 1;
        case 'D': return 2;
        case 'T': return 3;
        default : return 0;
    }
}

function getOption(option){
    switch(option){
        case '*': return 2;
        case '#': return -1;
        default : return 1;
    }
}
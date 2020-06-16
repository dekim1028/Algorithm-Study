/*
 * 2020.06.07
 * Level 1
 * 프로그래머스 - 모의고사
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(answers) {
    let answer = [];
    
    //첫번째 수포자 : 1,2,3,4,5,1,2,3,4,5....
    const supo_1 = answers.filter(function(val,i){
        const num = i%5+1;
        if(val==num) return true;
    }).length;
    
    //두번째 수포자 : 2,1,2,3,2,4,2,5,2,1,2,3,2,4,2,5....
    let cnt = 0;
    let arr = [1,3,4,5];
    const supo_2 = answers.filter(function(val,i){
        let num = 2;
        if(i%2!=0){
            num = arr[cnt];
            cnt==3?cnt=0:cnt++;
        }
        
        if(val==num) return true;
    }).length;
    
    //세번째 수포자 : 3,3,1,1,2,2,4,4,5,5,3,3,1,1,2,2,4,4,5,5....
    arr = [3,3,1,1,2,2,4,4,5,5];
    const supo_3 = answers.filter(function(val,i){
        let num = arr[i%10];
        if(val==num) return true;
    }).length;
    
    //최대값 구하기
    const max = Math.max(supo_1,supo_2,supo_3);
    
    if(supo_1==max) answer.push(1);
    if(supo_2==max) answer.push(2);
    if(supo_3==max) answer.push(3);
    
    return answer;
}
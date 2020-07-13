/*
 * 2020.07.11
 * Level 2
 * 프로그래머스 - 소수 만들기
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(nums) {
    var answer = 0;
    
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            for(var x=j+1;x<nums.length;x++){
                const num=nums[i]+nums[j]+nums[x];
                if(checkSosu(num)){
                    answer++;
                }
            }
        }
    }
    
    return answer;
}

function checkSosu(num){
    
    for(var i=2;i<=num;i++){
        if(num%i==0){
            if(num==i){
                return true;
            }else{
                return false;
            }
        }
    }
    
}
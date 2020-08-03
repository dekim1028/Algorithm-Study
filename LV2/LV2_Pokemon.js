/*
 * 2020.08.03
 * Level 2
 * 프로그래머스 - 포켓몬
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(nums) {
    var answer = 0;
    
    let turn = 0;
    let len = nums.length/2;
    
    nums = nums.sort((a,b)=>a-b);
    
    while(turn<len){
        if(nums.length>0){
            let target = nums[0];
            nums = nums.filter(val=>val!=target);
            answer++;
        }
        turn++;
    }
    
    return answer;
}
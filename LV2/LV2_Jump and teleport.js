/*
 * 2020.07.10
 * Level 2
 * 프로그래머스 - 점프와 순간 이동
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(n)
{
    var ans = 0;

    while(n>2){
        if(n%2==0){
            n = Math.floor(n/2);
        }else{
            n -= 1;
            ans++;
        }
    }
    
    ans += 1;

    return ans;
}
/*
 * 2020.05.24
 * Level 1
 * 프로그래머스 - 소수 찾기
 */

// 첫번째 로직 : 정확성 56.3, 효율성 미통과
/*
    function solution(arr)
    {
        var answer = [];

        var arr = Array.from({ length: (n - 1)}, (_, i) => 2 + (i * 1));
        
        answer = arr.filter(function(val,index){
            for(var i=2;i<val;i++){
                if(val%i==0){
                    return false;
                }
            }
            
            return true;
        });
        
        return answer.length;
    }
*/

// 두번째 로직 : 정확성 56.3, 효율성 미통과
/*
    function solution(n) {
        var answer = [];

        var arr = Array.from({ length: (n - 1)}, (_, i) => 2 + (i * 1));
        
        answer=arr.filter(function(val,i){
            return test(val,val-1);
        });
        
        return answer.length;
    }

    function test(val1,val2){
        
        if(val2==1) return true;
        
        if(val1%val2==0){
            return false;
        }else{
            return test(val1,val2-1);
        }

    }
*/


// 세번째 로직 : 정확성 통과, 효율성 통과

function solution(n) {
    var answer = 0;

    var arr = [];
    for(var i=2;i<=n;i++){
        arr[i]=i;
    }
    
    for(var i=2;i<=n;i++){
        if(arr[i]==0) continue;
        
        for(var j=i+i;j<=n;j+=i){
            arr[j]=0;
        }
    }
    
    
    for(var i=2;i<=n;i++){
        if(arr[i]!=0) answer++;
    }
    
    return answer;
}

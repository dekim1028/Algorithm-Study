/*
 * 2020.06.18
 * Level 2
 * 프로그래머스 - 다리를 지나는 트럭
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var queue = []; //다리를 건너고 있는 트럭
    var queueSum = 0; //다리를 건너고 있는 트럭의 총 무게
    var now = 0; //지금 다리를 건너고 있는 트럭
    
    for(var i =0;i<bridge_length;i++){
        queue.push(0);
    }
    
    now = truck_weights.shift();
    queue.unshift(now);
    queue.pop();
    queueSum += now;
    
    answer ++;
    
    while(queueSum){
        queueSum -= queue.pop();
        now = truck_weights.shift();
        
        if(queueSum+now<=weight){
            queue.unshift(now);
            queueSum += now;
        }else{
            queue.unshift(0);
            truck_weights.unshift(now);
        }
         answer ++;
    }
    
    return answer;
}
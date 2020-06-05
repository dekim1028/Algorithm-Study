/*
 * 2020.06.05
 * Level 1
 * 프로그래머스 - [2019 카카오 개발자 겨울 인턴십] 크레인 인형뽑기 게임
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(board, moves) {
    let answer = 0;
    let basket = [];
    let top = -1;
    
    for(var i=0;i<moves.length;i++){
        const targetLine = board.map(function(arr){
           return arr[moves[i]-1];
        });
        
        // 1. 뽑힐 인형 확인
        const target = returnTarget(targetLine);
        
        // 2. 바구니에 담기
        if(target>-1){
            board[target][moves[i]-1]=0;

            //3. 인형 터트리기
            if(top>-1 && (targetLine[target]==basket[top])){
               basket.pop();
               top--;
               answer++;
            }else{
                basket.push(targetLine[target]);
                top++;
            }
        } 
    }
    
    return answer*2;
}

function returnTarget(targetLine){
    var target = -1;
    
    for(var i=0;i<targetLine.length;i++){
        if(targetLine[i]!=0){
            target = i;
            break;
        }
    }
    
    return target;
}
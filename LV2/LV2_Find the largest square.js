/*
 * 2020.08.08
 * Level 2
 * 프로그래머스 - 가장 큰 정사각형 찾기
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(board)
{
    let answer = 0;

    if(board.length===1){
        return 1;
    }
    
    for(let i=1;i<board.length;i++){
        for(let j=1;j<board[0].length;j++){
            if(board[i][j]>0){
                let min = Math.min(board[i][j-1],board[i-1][j],board[i-1][j-1]);
                board[i][j]=min+1;
            }
            if(answer<board[i][j] * board[i][j]){
                answer = board[i][j] * board[i][j];
            }
        }
    }

    return answer;
}
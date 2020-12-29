/*
 * [그리디]
 * 숫자 카드 게임
 */

function solution() {
  let N = 3;
  let M = 3;
  let arr = [
    [3, 1, 2],
    [4, 1, 4],
    [2, 2, 2],
  ];

  //1. 각 행의 Min값 찾기
  const minArr = arr.map((col) => {
    return Math.min(...col);
  });

  //2. 각 행의 Min값 중 Max값 찾기
  return Math.max(...minArr);
}

function solution1() {
  let N = 2;
  let M = 4;
  let arr = [
    [7, 3, 1, 8],
    [3, 3, 3, 4],
  ];

  //1. 각 행의 Min값 찾기
  const minArr = arr.map((col) => {
    return Math.min(...col);
  });

  //2. 각 행의 Min값 중 Max값 찾기
  return Math.max(...minArr);
}

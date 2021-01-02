/*
 * [이진탐색]
 * 부품찾기
 */

function solution() {
  const N = 5;
  let nArr = [8, 3, 7, 9, 2];
  const M = 3;
  const mArr = [5, 7, 9];
  let answer = [];

  //1. 이진탐색을 수행하기 위해 사전에 정렬 수행
  nArr.sort((a, b) => a - b);

  function binarySearch(target, start, end) {
    if (start > end) return "no";

    const mid = parseInt((start + end) / 2);

    if (nArr[mid] === target) {
      return "yes";
    } else if (target < nArr[mid]) {
      return binarySearch(target, start, mid - 1);
    } else {
      return binarySearch(target, mid + 1, end);
    }
  }

  mArr.forEach((target) => {
    const result = binarySearch(target, 0, nArr.length - 1);
    answer.push(result);
  });

  return answer.join(" ");
}

function solution1() {
  const N = 5;
  let nArr = [8, 3, 7, 9, 2];
  const M = 3;
  const mArr = [5, 7, 9];

  //1. set 자료형으로 변환
  const setN = new Set(nArr);

  let answer = [];
  mArr.forEach((target) => {
    const result = setN.has(target) ? "yes" : "no";
    answer.push(result);
  });

  return answer.join(" ");
}

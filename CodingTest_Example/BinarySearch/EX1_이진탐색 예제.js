/*
 * [이진탐색]
 * 이진탐색 예제
 */

function solution() {
  let N = 10;
  let target = 19;
  let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

  // 재귀
  function binarySearch(start, end) {
    if (start > end) return "none";

    const mid = parseInt((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      return binarySearch(start, mid - 1);
    } else {
      return binarySearch(mid + 1, end);
    }
  }

  const answer = binarySearch(0, arr.length - 1);

  return answer;
}

function solution1() {
  let N = 10;
  let target = 3;
  let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

  let answer = "none";
  let start = 0;
  let end = arr.length - 1;

  // 반복문
  while (start <= end) {
    const mid = parseInt((start + end) / 2);

    if (arr[mid] === target) {
      answer = mid;
      break;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return answer;
}

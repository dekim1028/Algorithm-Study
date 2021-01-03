/*
 * [Dynamic]
 * 개미전사
 */

function solution() {
  let N = 4;
  let K = [3, 1, 10, 5];

  let arr = Array.from({ length: 4 }, () => 0);

  arr[0] = K[0];
  arr[1] = Math.max(arr[0], K[1]);

  for (let i = 2; i < N; i++) {
    arr[i] = Math.max(arr[i - 1], arr[i - 2] + K[i]);
  }

  return arr[N - 1];
}

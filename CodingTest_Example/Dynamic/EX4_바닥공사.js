/*
 * [Dynamic]
 * 바닥공사
 */

function solution() {
  let N = 3;

  let arr = Array.from({ length: N + 1 }, () => 0);

  arr[1] = 1;
  arr[2] = 3;

  for (let i = 3; i <= N; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2] * 2) % 796796;
  }

  return arr[N];
}

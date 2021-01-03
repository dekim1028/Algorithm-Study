/*
 * [Dynamic]
 * 1로 만들기
 */

function solution() {
  let X = 26;
  let arr = Array.from({ length: X + 1 }, () => 0);

  for (let i = 2; i <= X; i++) {
    arr[i] = arr[i - 1] + 1;

    if (i % 2 === 0) {
      arr[i] = Math.min(arr[i], arr[i / 2] + 1);
    }

    if (i % 3 === 0) {
      arr[i] = Math.min(arr[i], arr[i / 3] + 1);
    }

    if (i % 5 === 0) {
      arr[i] = Math.min(arr[i], arr[i / 5] + 1);
    }
  }

  return arr[X];
}

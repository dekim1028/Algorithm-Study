/*
 * [Dynamic]
 * 다이나믹 프로그래밍 예제 - 피보나치
 */

// 일반적인 방법
function solution() {
  let N = 1000;

  function fibonachi(num) {
    if (num < 3) return 1;

    return fibonachi(num - 1) + fibonachi(num - 2);
  }

  const answer = fibonachi(N);

  return answer;
}

// 다이나믹 프로그래밍 1 (재귀)
function solution1() {
  let N = 1000;
  let fibonachiArr = Array.from({ length: N + 1 }, () => null);

  function fibonachi(num) {
    if (num < 3) return 1;

    if (fibonachiArr[num]) {
      return fibonachiArr[num];
    }

    fibonachiArr[num] = fibonachi(num - 1) + fibonachi(num - 2);
    return fibonachiArr[num];
  }

  const answer = fibonachi(N);

  return answer;
}

// 다이나믹 프로그래밍 2 (반복문) >> 가장 좋은 방법
function solution2() {
  let N = 1000;
  let fibonachiArr = Array.from({ length: N + 1 }, () => 0);

  fibonachiArr[1] = 1;
  fibonachiArr[2] = 1;

  for (let i = 3; i <= N; i++) {
    fibonachiArr[i] = fibonachiArr[i - 1] + fibonachiArr[i - 2];
  }

  const answer = fibonachiArr[N];

  return answer;
}

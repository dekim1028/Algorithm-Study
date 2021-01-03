/*
 * [Dynamic]
 * 효율적인 화폐 구성
 */

function solution() {
  let N = 2;
  let M = 15;
  let coinArr = [2, 3];

  coinArr.sort((a, b) => b - a);

  let coinMin = Math.min(...coinArr);
  let arr = Array.from({ length: M + 1 }, (i) =>
    i > 0 && i < coinMin ? -1 : 0
  );

  for (let i = coinMin; i <= M; i++) {
    arr[i] = -1;

    for (let j = 0; j < N; j++) {
      const coin = coinArr[j];
      if (i % coin === 0) {
        arr[i] = i / coin;
        break;
      }
    }

    if (arr[i] < 0) {
      if (arr[i - 2] + arr[2] > 0) {
        arr[i] = arr[i - 2] + arr[2];
      }
    } else {
      arr[i] = Math.min(arr[i], arr[i - 2] + arr[2]);
    }
  }

  return arr[M];
}

function solution1() {
  let N = 2;
  let M = 15;
  let coinArr = [2, 3];

  let arr = Array.from({ length: M + 1 }, () => 10001);

  arr[0] = 0;

  for (let i = 0; i < N; i++) {
    for (let j = coinArr[i]; j <= M; j++) {
      if (arr[j - coinArr[i]] !== 10001) {
        arr[j] = Math.min(arr[j], arr[j - coinArr[i]] + 1);
      }
    }
  }

  return arr[M] === 10001 ? -1 : arr[M];
}

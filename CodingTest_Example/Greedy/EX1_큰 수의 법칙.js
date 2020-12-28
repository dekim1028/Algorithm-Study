/*
 * [그리디]
 * 큰 수의 법칙
 */

function solution() {
  let N = 5;
  let M = 8;
  let K = 3;
  let arr = [2, 4, 5, 4, 6];
  let answer = 0;

  //1. 가장 큰 값과 두번쨰로 큰 값을 찾는다.
  arr.sort((a, b) => b - a);

  const first = arr[0];
  const second = arr[1];

  while (true) {
    //2. 첫번쨰로 큰 깂을 K번 더한다.
    for (let i = 0; i < K; i++) {
      answer += first;
      M--;
    }

    //3. 더해진 숫자의 개수가 M보다 작으면 두번째로 큰 값을 한번 더한다.
    if (M > 0) {
      answer += second;
      M--;
    }

    //4. 더해진 숫자의 개수가 M과 같으면 answer를 return한다.
    if (M === 0) return answer;
  }
}

function solution1() {
  let N = 5;
  let M = 8;
  let K = 3;
  let arr = [2, 4, 5, 4, 6];

  //1. 가장 큰 값과 두번쨰로 큰 값을 찾는다.
  arr.sort((a, b) => b - a);

  const first = arr[0];
  const second = arr[1];

  //2. 가장 큰 수가 더해지는 횟수 >> (수열 반복 횟수 * K) + (M이 k+1로 나누어 떨어지지 않는 경우 나머지)
  const first_cnt = parseInt(M / (K + 1)) * K + (M % (K + 1));

  //3. 두번째로 큰 수가 더해지는 횟수 >> M - 가장 큰 수가 더해지는 횟수
  const second_cnt = M - first_cnt;

  return first * first_cnt + second * second_cnt;
}

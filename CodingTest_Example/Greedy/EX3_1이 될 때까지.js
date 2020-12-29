/*
 * [그리디]
 * 1이 될 때까지
 */

function solution() {
  let N = 25;
  let K = 3;
  let answer = 0;

  while (N !== 1) {
    if (N % K === 0) {
      N /= K;
    } else {
      N -= 1;
    }
    answer++;
  }

  return answer;
}

function solution1() {
  let N = 25;
  let K = 3;
  let answer = 0;

  while (true) {
    //1. N이 K로 나누어떨어지는 수가 될 때 까지 1씩 빼기
    const target = parseInt(N / K) * K;
    answer += N - target;
    N = target;

    //2. 더이상 나눌 수 없을 때 반복문 탈출
    if (N < K) break;

    //3. K로 나누기
    N /= K;
    answer += 1;
  }

  //4. 마지막으로 남은 수에 대하여 1씩 뺴기
  answer += N - 1;

  return answer;
}

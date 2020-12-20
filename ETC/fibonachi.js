function solution(n) {
  var answer = 0;

  let b = 1;
  for (let i = 0; i < n; i++) {
    let c = (answer + b) % 1234567;
    answer = b % 1234567;
    b = c % 1234567;
  }

  return answer;
}

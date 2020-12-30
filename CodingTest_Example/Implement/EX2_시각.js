/*
 * [구현]
 * 시각
 */

function solution() {
  let N = 5;
  let answer = 0;

  for (let hour = 0; hour <= N; hour++) {
    for (let minute = 0; minute < 60; minute++) {
      for (let second = 0; second < 60; second++) {
        const time = `${hour}${minute}${second}`;
        if (time.indexOf("3") > -1) {
          answer++;
        }
      }
    }
  }

  return answer;
}

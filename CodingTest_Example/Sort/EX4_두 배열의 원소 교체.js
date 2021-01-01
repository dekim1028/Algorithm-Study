/*
 * [정렬]
 * 두 배열의 원소 교체
 */

function solution() {
  let N = 5;
  let K = 3;
  let A = [1, 2, 5, 4, 3];
  let B = [5, 5, 6, 6, 5];

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < K; i++) {
    if (A[i] < B[i]) {
      const temp = A[i];
      A[i] = B[i];
      B[i] = temp;
    } else {
      break;
    }
  }

  return A.reduce((ac, cu) => ac + cu, 0);
}

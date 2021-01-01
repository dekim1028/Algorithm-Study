/*
 * [정렬]
 * 위에서 아래로
 */

function solution() {
  let N = 2;
  let arr = [
    ["홍길동", 95],
    ["이순신", 77],
  ];

  const answer = arr.sort((a, b) => a[1] - b[1]).map((item) => item[0]);

  return answer;
}

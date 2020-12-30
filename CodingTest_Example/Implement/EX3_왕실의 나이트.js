/*
 * [구현]
 * 왕실의 나이트
 */

function solution() {
  let POS = "a1";

  let x = POS.charCodeAt(0) - 96;
  let y = parseInt(POS.charAt(1));
  const DIR = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
  ];
  let answer = 0;

  DIR.forEach((dir) => {
    if (
      x + dir[0] > 0 &&
      x + dir[0] <= 8 &&
      y + dir[1] > 0 &&
      y + dir[1] <= 8
    ) {
      answer++;
    }
  });

  return answer;
}

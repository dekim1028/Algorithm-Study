/*
 * [구현]
 * 상하좌우
 */

function solution() {
  let N = 5;
  let MOVE = ["R", "R", "R", "U", "D", "D"];

  const MOVE_X = MOVE.reduce((ac, cu) => {
    if (cu === "D" && ac + 1 <= N) {
      return ac + 1;
    } else if (cu === "U" && ac - 1 > 0) {
      return ac - 1;
    }

    return ac;
  }, 0);

  const MOVE_Y = MOVE.reduce((ac, cu) => {
    if (cu === "R" && ac + 1 <= N) {
      return ac + 1;
    } else if (cu === "L" && ac - 1 > 0) {
      return ac - 1;
    }

    return ac;
  }, 0);

  return `${MOVE_X + 1} ${MOVE_Y + 1}`;
}

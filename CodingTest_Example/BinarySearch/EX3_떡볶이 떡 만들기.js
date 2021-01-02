/*
 * [이진탐색]
 * 떡볶이 떡 만들기
 */

function solution() {
  const N = 5;
  const M = 6;
  const arr = [19, 15, 10, 17];

  let height = Math.max(...arr) - 1;
  while (height >= 0) {
    const sum = arr
      .map((target) => {
        if (target > height) {
          return target - height;
        } else {
          return 0;
        }
      })
      .reduce((ac, cu) => {
        return ac + cu;
      }, 0);

    if (sum >= 6) {
      return height;
    }

    height--;
  }
}

function solution1() {
  const N = 5;
  const M = 6;
  const arr = [19, 15, 10, 17];

  let start = 0;
  let end = Math.max(...arr);
  let answer = 0;

  while (start <= end) {
    const height = parseInt((start + end) / 2);

    const sum = arr
      .map((target) => {
        if (target > height) {
          return target - height;
        } else {
          return 0;
        }
      })
      .reduce((ac, cu) => {
        return ac + cu;
      }, 0);

    if (M <= sum) {
      //떡의 양이 충분한 경우
      answer = height;
      start = height + 1;
    } else {
      //떡의 양이 적은 경우
      end = height - 1;
    }
  }

  return answer;
}

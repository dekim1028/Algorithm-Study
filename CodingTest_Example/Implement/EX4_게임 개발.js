/*
 * [구현]
 * 게임 개발
 */

function solution() {
  let MAP_LEN = [4, 4];
  let POS = [1, 1, 0];
  let MAP = [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1],
  ];
  const DIR = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ]; //북, 서, 남, 동
  let answer = 1;

  while (true) {
    let check = false;

    //1. 왼쪽으로 방향 회전
    for (let i = POS[2] + 1; i <= POS[2] + 4; i++) {
      const dir = i % 4;
      const move_x = POS[0] + DIR[dir][0];
      const move_y = POS[1] + DIR[dir][1];

      //2. 범위에 벗어나지 않고 육지인 경우 이동
      if (
        move_x >= 0 &&
        move_x < MAP_LEN[0] &&
        move_y >= 0 &&
        move_y < MAP_LEN[1]
      ) {
        if (MAP[move_x][move_y] === 0) {
          MAP[POS[0]][POS[1]] = -1;
          POS = [move_x, move_y, dir];
          check = true;
          answer++;
          break;
        }
      }
    }

    //3. 이동하지 못한경우 >> 뒤로 힌칸 이동
    if (!check) {
      const back_pos = POS[2] + 2 > 3 ? POS[2] - 2 : POS[2] + 2;
      POS = [POS[0] + DIR[back_pos][0], POS[1] + DIR[back_pos][1], POS[2]];

      //4. 뒤가 육지가 아닌 경우 while 탈출
      if (MAP[(POS[0], POS[1])] !== 0) break;
    }
  }

  return answer;
}

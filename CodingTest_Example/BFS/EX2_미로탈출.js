/*
 * [BFS]
 * 미로탈출
 */

function solution() {
  const N = 5;
  const M = 6;
  const graph = [
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ];
  const DIR = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  bfs(0, 0);

  function bfs(x, y) {
    let queue = [[x, y]];

    while (queue.length > 0) {
      const v = queue.shift();

      DIR.forEach((dir) => {
        const move_x = v[0] + dir[0];
        const move_y = v[1] + dir[1];

        if (move_x >= 0 && move_x < N && move_y >= 0 && move_y < M) {
          if (graph[move_x][move_y] === 1) {
            graph[move_x][move_y] = graph[v[0]][v[1]] + 1;
            queue.push([move_x, move_y]);
          }
        }
      });
    }
  }

  return graph[N - 1][M - 1];
}

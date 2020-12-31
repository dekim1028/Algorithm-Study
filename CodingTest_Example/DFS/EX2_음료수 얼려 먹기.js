/*
 * [DFS]
 * 음료수 얼려 먹기
 */

function solution() {
  const graph = [
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
  ];
  let answer = 0;

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[0].length; j++) {
      if (dfs(graph, [i, j]) === true) {
        answer++;
      }
    }
  }

  return answer;
}

function dfs(graph, target) {
  const x = target[0];
  const y = target[1];

  if (x < 0 || x >= graph.length || y < 0 || y >= graph[0].length) {
    return false;
  }

  if (graph[x][y] === 0) {
    graph[x][y] = 1;
    dfs(graph, [x - 1, y]);
    dfs(graph, [x, y - 1]);
    dfs(graph, [x + 1, y]);
    dfs(graph, [x, y + 1]);
    return true;
  }

  return false;
}

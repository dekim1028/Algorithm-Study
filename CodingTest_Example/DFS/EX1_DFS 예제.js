/*
 * [DFS]
 * DFS 예제
 */

function solution() {
  const graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7],
  ];

  let visited = [false, false, false, false, false, false, false, false, false];

  dfs(graph, 1, visited);
}

function dfs(graph, target, visited) {
  visited[target] = true;
  console.log(target);

  graph[target].forEach((i) => {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  });
}

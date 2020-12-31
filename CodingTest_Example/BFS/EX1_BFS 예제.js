/*
 * [BFS]
 * BFS 예제
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

  bfs(graph, 1, visited);
}

function bfs(graph, target, visited) {
  let queue = [target];
  visited[target] = true;

  while (queue.length > 0) {
    const v = queue.shift();
    console.log(v);
    graph[v].forEach((i) => {
      if (!visited[i]) {
        queue.push(i);
        visited[i] = true;
      }
    });
  }
}

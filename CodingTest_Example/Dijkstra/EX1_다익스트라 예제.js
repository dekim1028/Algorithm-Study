/*
 * [Dijkstra]
 * Dijkstra 예제
 */

function solution() {
  const N = 6;
  const M = 11;
  const start = 1;
  const graph = [
    [],
    [
      [2, 2],
      [3, 5],
      [4, 1],
    ],
    [
      [3, 3],
      [4, 2],
    ],
    [
      [2, 3],
      [6, 5],
    ],
    [
      [3, 3],
      [5, 1],
    ],
    [
      [3, 1],
      [6, 2],
    ],
  ];

  const distance = Array.from({ length: N + 1 }, () => Infinity);

  //1. 시작 인덱스 queue 삽입
  const priorityQueue = new PriorityQueue();
  priorityQueue.enqueue([start, 0]);

  //2. 시작 인덱스 거리 0
  distance[start] = 0;

  while (priorityQueue.store.length > 0) {
    const data = priorityQueue.dequeue();
    const now = data[0];
    const dist = data[1];

    //3. 방문한적 있으면 무시
    if (distance[now] < dist) continue;

    if (!graph[now]) break;

    //4. 현재 노드에서 인접한 노드까지의 거리 체크
    graph[now].forEach((target) => {
      const cost = dist + target[1];

      if (cost < distance[target[0]]) {
        distance[target[0]] = cost;
        priorityQueue.enqueue([target[0], cost]);
      }
    });
  }

  return distance.splice(1);
}

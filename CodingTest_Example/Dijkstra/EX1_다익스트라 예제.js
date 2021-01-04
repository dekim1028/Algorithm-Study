/*
 * [Dijkstra]
 * Dijkstra 예제
 */

function solution() {
  const priorityQueue = new PriorityQueue();

  priorityQueue.enqueue([1, 2, 22]);
  priorityQueue.enqueue([2, 3, 5]);
  priorityQueue.enqueue([3, 4, 10]);

  console.log(priorityQueue.dequeue()); // Student('Pengsoo', 10)
}

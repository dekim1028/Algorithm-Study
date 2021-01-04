class PriorityQueue {
  constructor() {
    this.store = [];
  }

  enqueue(item) {
    this.store.push(item);
  }

  dequeue() {
    let entry = 0;
    this.store.forEach((item, index) => {
      if (this.store[entry][2] < this.store[index][2]) {
        entry = index;
      }
    });
    return this.store.splice(entry, 1);
  }
}

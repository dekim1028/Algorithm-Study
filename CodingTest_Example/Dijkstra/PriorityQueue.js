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
      if (this.store[entry][1] > this.store[index][1]) {
        entry = index;
      }
    });

    return this.store.splice(entry, 1)[0];
  }
}

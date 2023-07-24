const { LinkedList } = require('./linkedList');

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    return this.list.add(value);
  }

  dequeue() {
    return this.list.removeFirst();
  }

  peek() {
    return this.list.head;
  }

  get length() {
    return this.list.length;
  }
}

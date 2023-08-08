const { LinkedList } = require('./linkedList');

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    return this.list.add(value);
  }

  dequeue() {
    const node = this.list.removeFirst();
    return node && node.value;
  }

  peek() {
    const node = this.list.head;
    return node && node.value;
  }

  get length() {
    return this.list.length;
  }
}

const { LinkedList } = require('./linkedList.js');

class Deque {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    return this.list.add(value);
  }

  pop() {
    const node = this.list.removeLast();
    return node && node.value;
  }

  unshift(value) {
    return this.list.unshift(value);
  }

  shift() {
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

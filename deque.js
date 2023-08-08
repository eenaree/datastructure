const { LinkedList } = require('./linkedList.js');

class Deque {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    return this.list.add(value);
  }

  pop() {
    return this.list.removeLast();
  }

  unshift(value) {
    return this.list.unshift(value);
  }

  shift() {
    return this.list.removeFirst();
  }

  peek() {
    return this.list.head;
  }

  get length() {
    return this.list.length;
  }
}

const { LinkedList } = require('./linkedList');

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    return this.list.add(value);
  }

  pop() {
    return this.list.removeLast();
  }

  top() {
    return this.list.tail;
  }

  get length() {
    return this.list.length;
  }
}

const { LinkedList } = require('./linkedList');

class Stack {
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

  top() {
    const node = this.list.tail;
    return node && node.value;
  }

  get length() {
    return this.list.length;
  }
}

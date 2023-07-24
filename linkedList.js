class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    const data = new Data(value, this.tail);

    if (this.tail) {
      this.tail.next = data;
    } else {
      this.head = data;
    }
    this.tail = data;
    this.length += 1;
    return this.length;
  }

  remove(index) {
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current?.next;
    }

    if (current) {
      if (current.prev) {
        current.prev.next = current.next;
      } else {
        this.head = current.next;
      }
      if (current.next) {
        current.next.prev = current.prev;
      } else {
        this.tail = current.prev;
      }
      this.length -= 1;
    }

    return this.length;
  }

  removeFirst() {
    if (this.head) {
      if (this.head.next) {
        this.head.next.prev = null;
      }
      this.head = this.head.next;
      this.length -= 1;
    }

    return this.length;
  }

  search(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current?.next;
    }

    return current;
  }
}

class Data {
  constructor(value, prev = null) {
    this.value = value;
    this.next = null;
    this.prev = prev;
  }
}

module.exports = { LinkedList };

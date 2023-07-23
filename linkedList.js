class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Data(value, current);
    } else {
      this.head = new Data(value);
    }

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
      }
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

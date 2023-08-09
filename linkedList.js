class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    const node = new Node(value, this.tail);

    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
    this.length += 1;
    return this.length;
  }

  remove(index) {
    const current = this.search(index);

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
    const head = this.head;
    if (head) {
      if (head.next) {
        head.next.prev = null;
      } else {
        // head와 tail이 같은 상태
        this.tail = head.next;
      }
      this.head = head.next;
      this.length -= 1;
    }

    return head;
  }

  removeLast() {
    const tail = this.tail;
    if (tail) {
      if (tail.prev) {
        tail.prev.next = null;
      } else {
        // head와 tail이 같은 상태
        this.head = tail.prev;
      }
      this.tail = tail.prev;
      this.length -= 1;
    }

    return tail;
  }

  unshift(value) {
    if (this.head) {
      const exHead = this.head;
      this.head = new Node(value, null);
      this.head.next = exHead;
      exHead.prev = this.head;
      this.length += 1;
    }

    return this.length;
  }

  search(index) {
    return this.#search(index);
  }

  #search(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current?.next;
    }

    return current && current.value;
  }
}

class Node {
  constructor(value, prev = null) {
    this.value = value;
    this.next = null;
    this.prev = prev;
  }
}

module.exports = { LinkedList };

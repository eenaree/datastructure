class PriorityQueue {
  constructor() {
    this.arr = [];
  }

  insert(priority, value) {
    this.arr.push({ priority, value });
    this.#reheapUp(this.arr.length - 1);
  }

  #reheapUp(index) {
    if (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.arr[index].priority < this.arr[parentIndex].priority) {
        const smaller = this.arr[index];
        this.arr[index] = this.arr[parentIndex];
        this.arr[parentIndex] = smaller;
        this.#reheapUp(parentIndex);
      }
    }
  }

  search(value) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].value === value) {
        return i;
      }
    }

    return null;
  }

  remove() {
    if (this.arr.length === 0) {
      return false;
    }

    if (this.arr.length === 1) {
      return this.arr.pop();
    }

    const root = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.#reheapDown(0);
    return root;
  }

  #reheapDown(index) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;

    if (leftIndex < this.arr.length) {
      const smallerIndex =
        this.arr[leftIndex].priority >
        (this.arr[rightIndex]?.priority ?? Number.NEGATIVE_INFINITY)
          ? rightIndex
          : leftIndex;
      const smaller = this.arr[smallerIndex];

      if (smaller) {
        if (this.arr[smallerIndex].priority < this.arr[index].priority) {
          this.arr[smallerIndex] = this.arr[index];
          this.arr[index] = smaller;
          this.#reheapDown(smallerIndex);
        }
      }
    }
  }

  sort() {
    const sortedArr = [];
    while (this.arr.length > 0) {
      sortedArr.push(this.remove());
    }

    return sortedArr;
  }

  update(value, newValue) {
    const index = this.search(value);
    if (index === null) {
      return false;
    }

    this.arr[index] = newValue;
    for (let i = Math.floor(this.arr.length / 2 - 1); i >= 0; i--) {
      this.#heapify(i);
    }
  }

  removeValue(value) {
    const index = this.search(value);
    if (index === null) {
      return false;
    }

    this.arr.splice(index, 1);
    for (let i = Math.floor(this.arr.length / 2 - 1); i >= 0; i--) {
      this.#heapify(i);
    }
  }

  #heapify(index) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;

    if (leftIndex < this.arr.length) {
      const smallerIndex =
        this.arr[leftIndex].priority >
        (this.arr[rightIndex]?.priority ?? Number.NEGATIVE_INFINITY)
          ? rightIndex
          : leftIndex;
      const smaller = this.arr[smallerIndex];

      if (smaller) {
        if (this.arr[smallerIndex].priority < this.arr[index].priority) {
          this.arr[smallerIndex] = this.arr[index];
          this.arr[index] = smaller;
        }
      }
    }
  }
}

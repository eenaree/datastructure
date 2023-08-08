class MinHeap {
  constructor() {
    this.arr = [];
  }

  insert(value) {
    if (this.search(value) !== null) {
      throw new Error(`value ${value} is already in the tree.`);
    }

    this.arr[this.arr.length] = value;
    this.#reheapUp(this.arr.length - 1);
  }

  #reheapUp(index) {
    if (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.arr[index] < this.arr[parentIndex]) {
        const smaller = this.arr[index];
        this.arr[index] = this.arr[parentIndex];
        this.arr[parentIndex] = smaller;
        this.#reheapUp(parentIndex);
      }
    }
  }

  search(value) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === value) {
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
        this.arr[leftIndex] > (this.arr[rightIndex] ?? Number.NEGATIVE_INFINITY)
          ? rightIndex
          : leftIndex;
      const smaller = this.arr[smallerIndex];

      if (smaller) {
        if (this.arr[smallerIndex] < this.arr[index]) {
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
        this.arr[leftIndex] > (this.arr[rightIndex] ?? Number.NEGATIVE_INFINITY)
          ? rightIndex
          : leftIndex;
      const smaller = this.arr[smallerIndex];

      if (smaller) {
        if (this.arr[smallerIndex] < this.arr[index]) {
          this.arr[smallerIndex] = this.arr[index];
          this.arr[index] = smaller;
        }
      }
    }
  }
}

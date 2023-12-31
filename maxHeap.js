class MaxHeap {
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
      // 부모 노드가 루트가 될 때까지
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.arr[index] > this.arr[parentIndex]) {
        const bigger = this.arr[index];
        this.arr[index] = this.arr[parentIndex];
        this.arr[parentIndex] = bigger;
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
      // 노드의 자식이 1개라도 있는 경우
      const biggerIndex =
        this.arr[leftIndex] > (this.arr[rightIndex] ?? Number.NEGATIVE_INFINITY)
          ? leftIndex
          : rightIndex;
      const bigger = this.arr[biggerIndex];

      if (bigger) {
        if (this.arr[biggerIndex] > this.arr[index]) {
          this.arr[biggerIndex] = this.arr[index];
          this.arr[index] = bigger;
          this.#reheapDown(biggerIndex);
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
      const biggerIndex =
        this.arr[leftIndex] > (this.arr[rightIndex] ?? Number.NEGATIVE_INFINITY)
          ? leftIndex
          : rightIndex;
      const bigger = this.arr[biggerIndex];

      if (bigger) {
        if (this.arr[biggerIndex] > this.arr[index]) {
          this.arr[biggerIndex] = this.arr[index];
          this.arr[index] = bigger;
        }
      }
    }
  }
}

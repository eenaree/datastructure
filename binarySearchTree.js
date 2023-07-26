class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root) {
      this.#insert(this.root, value);
    } else {
      this.root = new Node(value);
    }
  }

  #insert(node, value) {
    if (node.value === value) {
      throw new Error(`value ${value} is already in the tree.`);
    }

    if (node.value > value) {
      if (node.left) {
        this.#insert(node.left, value);
      } else {
        node.left = new Node(value);
      }
    } else {
      if (node.right) {
        this.#insert(node.right, value);
      } else {
        node.right = new Node(value);
      }
    }
  }

  search(value) {
    return this.#search(this.root, value);
  }

  #search(node, value) {
    if (node) {
      if (node.value === value) {
        return node;
      } else if (node.value > value) {
        return this.#search(node.left, value);
      } else {
        return this.#search(node.right, value);
      }
    } else {
      throw new Error(`value ${value} not found`);
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

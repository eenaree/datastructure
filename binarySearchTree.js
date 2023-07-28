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
    if (!node) {
      throw new Error(`value ${value} not found`);
    }

    if (node.value === value) {
      return node;
    } else {
      if (node.value > value) {
        return this.#search(node.left, value);
      } else {
        return this.#search(node.right, value);
      }
    }
  }

  remove(value) {
    this.root = this.#remove(this.root, value);
  }

  #remove(node, value) {
    if (!node) {
      throw new Error(`value ${value} not found`);
    }

    if (node.value === value) {
      if (node.left && node.right) {
        let leafParent = node;
        let leaf = node.left;
        while (leaf.right) {
          leafParent = leaf;
          leaf = leaf.right;
        }
        node.value = leaf.value;
        if (node === leafParent) {
          leafParent.left = null;
        } else {
          leafParent.right = null;
        }
        return node;
      } else if (node.left) {
        return node.left;
      } else if (node.right) {
        return node.right;
      } else {
        return null;
      }
    } else {
      if (node.value > value) {
        node.left = this.#remove(node.left, value);
      } else {
        node.right = this.#remove(node.right, value);
      }
      return node;
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

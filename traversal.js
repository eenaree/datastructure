const { BinarySearchTree } = require('./binarySearchTree.js');
const { Stack } = require('./stack.js');
const { Queue } = require('./queue.js');

function breadthFirstSearch(tree) {
  const queue = new Queue();
  const root = tree.root;
  if (root) {
    queue.enqueue(root);
  }

  while (queue.length > 0) {
    const node = queue.dequeue();
    console.log(node.value);
    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
  }
}

function preOrder(node) {
  if (node) {
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
  }
}

function inOrder(node) {
  if (node) {
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
  }
}

function postOrder(node) {
  if (node) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
  }
}

function iterativePreOrder(root) {
  if (root) {
    const stack = new Stack();
    stack.push(root);

    while (stack.length > 0) {
      const node = stack.pop();
      console.log(node.value);

      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
    }
  }
}

function iterativeInOrder(root) {
  if (root) {
    const stack = new Stack();

    while (stack.length > 0 || root) {
      while (root) {
        stack.push(root);
        root = root.left;
      }

      const node = stack.pop();
      console.log(node.value);
      root = node.right;
    }
  }
}

function iterativePostOrder(root) {
  if (root) {
    const stack = new Stack();
    stack.push(root);

    while (stack.length > 0) {
      const node = stack.pop();
      console.log(node.value);

      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }

    while (stack.length > 0) {
      console.log(stack.pop());
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(6);
bst.insert(10);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(30);
bst.insert(1);

breadthFirstSearch(bst); // bfs 실행결과: 6 3 10 1 9 30 8

preOrder(bst.root); // dfs preOrder 실행결과: 6 3 1 10 9 8 30
inOrder(bst.root); // dfs inOrder 실행결과: 1 3 6 8 9 10 30 (오름차순)
postOrder(bst.root); // dfs postOrder 실행결과: 1 3 8 9 30 10 6

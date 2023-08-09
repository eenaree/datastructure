const { BinarySearchTree } = require('./binarySearchTree.js');
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

const bst = new BinarySearchTree();
bst.insert(6);
bst.insert(10);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(30);
bst.insert(1);

breadthFirstSearch(bst); // bfs 실행결과: 6 3 10 1 9 30 8

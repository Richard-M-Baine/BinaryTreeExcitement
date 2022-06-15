const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  if (!rootNode.left) {
    return rootNode.val;
  }
  let current = rootNode;
  while (current) {
    if (!current.left) {
      return current.val;
    }
    current = current.left;
  }
}

function findMaxBST(rootNode) {
  if (!rootNode.right) {
    return rootNode.val;
  }
  let current = rootNode;
  while (current) {
    if (!current.right) {
      return current.val;
    }
    current = current.right;
  }
}

function findMinBT(rootNode) {
  let count = Infinity;
  let queue = [rootNode];
  while (queue.length) {
    let node = queue.pop();
    if (count > node.val) {
      count = node.val;
    }
    if (node.left) queue.unshift(node.left);
    if (node.right) queue.unshift(node.right);
  }
  return count;
}

function findMaxBT(rootNode) {
  // Your code here
  let count = 0;
  let queue = [rootNode];
  while (queue.length) {
    let node = queue.shift();
    if (count < node.val) {
      count = node.val;
    }
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return count;
}

//USING RECURSION
// function getHeight(rootNode, count = 0) {
//   // Your code here
//   if (!rootNode) {
//     return count;
//   }
//   if (!rootNode.left && !rootNode.right) {
//     return count;
//   }
//   let left = getHeight(rootNode.left, count + 1);
//   let right = getHeight(rootNode.right, count + 1);

//   return Math.max(left, right);
// }

//we need to find a way to track where we found the nodes
//que will let you get level by level
//mutate the object and add a level property

function getHeight(rootNode) {
  let count = 0;
  let que = [rootNode];
  while (que.length) {
    let node = que.shift();
    if (node.level > count) {
      count = node.level;
    }
    if (node.left) {
      node.left.level = node.level + 1;
      que.push(node.left);
    }
    if (node.right) {
      node.right.level = node.level + 1;
      que.push(node.right);
    }
  }
  return count;
}

function countNodes(rootNode) {
  // Your code here
  if (!rootNode) {
    return 0;
  }
  let count = 0;
  let que = [rootNode];
  while (que.length) {
    let node = que.shift();
    count++;
    if (node.left) {
      que.push(node.left);
    }
    if (node.right) {
      que.push(node.right);
    }
  }
  return count;
}

function balancedTree(rootNode) {
  // Your code here
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   set the parent that points to it to null
  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor
  // Case 3: One child:
  //   Make the parent point to the child
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};

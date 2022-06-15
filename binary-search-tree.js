// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      this.root = null

    }

    insert(val, currentNode=this.root) {
      let node = new TreeNode(val)
      if (this.root === null){
        this.root = node
        return this
      }
      let current = this.root
      while(true){
        if (val < current.val){
          if (!current.left){
            current.left = node
            return this
          }
          current = current.left
        }
        else{
          if (!current.right){
            current.right = node
            return this
          }
          current = current.right
        }
      }

    }

    search(val) {

     let queue = [this.root]
     while(queue.length > 0){
      let node = queue.pop()
      if (node.left){
        queue.unshift(node.left)
      }
      if (node.right){
        queue.unshift(node.right)
      }
      if(node.val === val){return true}
     }
  return false

    }


    preOrderTraversal(currentNode = this.root) {
      if (currentNode === null) return this
      console.log(currentNode.val)
      const leftSum = this.preOrderTraversal(currentNode.left)
      const rightSum = this.preOrderTraversal(currentNode.right)

    }


    inOrderTraversal(currentNode = this.root) {
      if (currentNode === null) return this

      const leftSum = this.inOrderTraversal(currentNode.left)
      console.log(currentNode.val)
      const rightSum = this.inOrderTraversal(currentNode.right)
    }


    postOrderTraversal(currentNode = this.root) {
      if (currentNode === null) return this

      const leftSum = this.postOrderTraversal(currentNode.left)

      const rightSum = this.postOrderTraversal(currentNode.right)
      console.log(currentNode.val)
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      let queue = [this.root]
     while(queue.length > 0){
      let node = queue.pop()
      console.log(node.val)
      if (node.left){
        queue.unshift(node.left)
      }
      if (node.right){
        queue.unshift(node.right)
      }
     }

    }



    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      let stack = [this.root]
      while(stack.length > 0){
       let node = stack.pop()
       console.log(node.val)
       if (node.left){
         stack.push(node.left)
       }
       if (node.right){
         stack.push(node.right)
       }
      }

     }
  }

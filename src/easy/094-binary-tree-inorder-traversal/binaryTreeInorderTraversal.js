/**
 * @param {TreeNode} root
 * @return {number[]}
*/

const { log } = console;

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var inorderTraversalRecursive = function(root) {
  const array = [];

  var recurse = function(node) {
    if (!node) {
      return;
    }
    
    if (node.left) {
      recurse(node.left);
    }

    array.push(node.val);
    
    if (node.right) {
      recurse(node.right);
    }
  }

  recurse(root);

  return array;
};

var inorderTraversalIterative = function(root) {
  const stack = [];
  const results = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      results.push(root.val);
      root = root.right;
    }
  }

  return results;
};

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);

node1.right = node2;
node2.left = node3;

const node4 = new TreeNode(1)
const node5 = new TreeNode(2)
const node6 = new TreeNode(3)
const node7 = new TreeNode(4)
const node8 = new TreeNode(5)

node4.left = node5;
node4.right = node6;
node5.left = node7;
node5.right = node8;

log(inorderTraversalRecursive(node1));   // output == [1,3,2]
log(inorderTraversalIterative(node1));   // output == [1,3,2]
log(inorderTraversalIterative(node4));   // output == [4,2,5,1,3]

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const { log } = console;

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Recursive solution
var preorderTraversalRecursive = function (root) {
  const array = [];

  var recurse = function (node) {
    if (!node) {
      return;
    }

    if (node.val) {
      array.push(node.val);
    }

    if (node.left) {
      recurse(node.left);
    }

    if (node.right) {
      recurse(node.right);
    }
  };

  recurse(root);

  return array;
};

// Iterative solution
var preorderTraversalIterative = function (root) {
  if (!root) {
    return [];
  }

  const stack = [root];
  const results = [];

  while (stack.length) {
    results.push(root.val);
    if (root.right) {
      stack.push(root.right);
    }
    if (root.left) {
      stack.push(root.left);
    }
    root = stack.pop();
  }

  return results;
};

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);

node1.right = node2;
node2.left = node3;

log(preorderTraversalRecursive(node1));   // output == [1,2,3]
log(preorderTraversalIterative(node1));   // output == [1,2,3]

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

var postorderTraversalRecursive = function (root) {
  const array = [];

  var recurse = function (node) {
    if (!node) {
      return;
    }

    if (node.left) {
      recurse(node.left);
    }

    if (node.right) {
      recurse(node.right);
    }

    array.push(node.val);
  };

  recurse(root);

  return array;
};

var postorderTraversalIterative = function (root) {
  if (!root) {
    return [];
  }

  const stack1 = [root];
  const stack2 = [];

  while (stack1.length) {
    root = stack1.pop();
    if (root) {
      stack2.splice(0, 0, root.val);
    }
    if (root.left) {
      stack1.push(root.left);
    }
    if (root.right) {
      stack1.push(root.right);
    }
  }

  return stack2;
};

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);

node1.right = node2;
node2.left = node3;

log(postorderTraversalRecursive(node1)); // output == [3,2,1]
log(postorderTraversalIterative(node1)); // output == [3,2,1]

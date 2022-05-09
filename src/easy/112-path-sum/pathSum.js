const { log } = console;

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  if (!node.left && !node.right && root.val === targetSum) {
    return true;
  }

  sum -= root.val;

  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};

const node1 = new TreeNode(5);
const node2 = new TreeNode(4);
const node3 = new TreeNode(8);
const node4 = new TreeNode(11);
const node5 = new TreeNode(13);
const node6 = new TreeNode(4);
const node7 = new TreeNode(7);
const node8 = new TreeNode(2);
const node9 = new TreeNode(1);

node1.left = node2;
node1.right = node3;

node2.left = node4;

node3.left = node5;
node3.right = node6;

node4.left = node8;
node4.right = node7;

node6.right = node9;

const node10 = new TreeNode(1);
const node11 = new TreeNode(2);
node10.left = node11;

log(hasPathSum(node1, 22)); // output == true
log(hasPathSum(node10, 1)); // output == false
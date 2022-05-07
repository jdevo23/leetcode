const { log } = console;

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return false;
  }
  
  const stack = [root.left, root.right];

  while (stack.length) {
    let node1 = stack.shift();
    let node2 = stack.shift();

    if (!node1 && !node2) {
      continue;
    }

    if ((!node1 && node2) || (node1 && !node2)) {
      return false;
    }

    if (node1.val !== node2.val) {
      return false;
    }

    stack.push(node1.left);
    stack.push(node2.right);
    stack.push(node1.right);
    stack.push(node2.left);
  }

  return true;
};

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(2);
const node6 = new TreeNode(3);
const node7 = new TreeNode(4);

node1.left = node2;
node1.right = node5;
node2.left = node3;
node2.right = node4;
node5.left = node7;
node5.right = node6;

const node8 = new TreeNode(1);
const node9 = new TreeNode(2);
const node10 = new TreeNode(2);
const node12 = new TreeNode(3);
const node14 = new TreeNode(3);

node8.left = node9;
node8.right = node10;
node9.left = null;
node9.right = node12;
node10.left = null;
node10.right = node14;

log(isSymmetric(node1)); // output == true
log(isSymmetric(node8)); // output == false
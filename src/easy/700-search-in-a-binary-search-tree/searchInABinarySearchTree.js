function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) {
    return null;
  }

  let returnNode = null;

  var recurse = function (node) {
    if (node.val === val) {
      returnNode = node;
    }

    if (node.right) {
      recurse(node.right);
    }

    if (node.left) {
      recurse(node.left);
    }
  };

  recurse(root);
  return returnNode;
};

const node1 = new TreeNode(4);
const node2 = new TreeNode(2);
const node3 = new TreeNode(7);
const node4 = new TreeNode(1);
const node5 = new TreeNode(3);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

console.log(searchBST(node1, 2)); // output == [2,1,3]

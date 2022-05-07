/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) {
    return null;
  }

  var recurse = function(node) {
    if (!node) {
      return;
    }

    let left = node.left;
    let right = node.right;

    node.left = right;
    node.right = left;

    if (node.right) {
      recurse(node.right);
    }

    if (node.left) {
      recurse(node.left);
    }
  }

  recurse(root);

  return root;
};
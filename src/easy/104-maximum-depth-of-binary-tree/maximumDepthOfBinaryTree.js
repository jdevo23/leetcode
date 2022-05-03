function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const { log } = console;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let answer = 0;

  if (!root) {
    return answer;
  }
  
  var recurse = function(node, count) {
    count++;
    answer = Math.max(answer, count);

    if (!node) {
      return;
    }

    if (node.left) {
      recurse(node.left, count);
    }
    
    if (node.right) {
      recurse(node.right, count);
    }
  }

  recurse(root, answer);

  return answer;
};

const node1 = new TreeNode(3);
const node2 = new TreeNode(9);
const node3 = new TreeNode(20);
const node4 = new TreeNode(15);
const node5 = new TreeNode(7);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;


log(maxDepth(node1)); // output == 3

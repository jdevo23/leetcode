function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

const { log } = console;

var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const array1 = [[root]];
  const array2 = [[root.val]];

  let pointer = 0;
  while (array1[pointer].length) {
    let arr1 = [];
    let arr2 = [];

    array1[pointer].forEach((node) => {
      if (node.left) {
        arr1.push(node.left);
        arr2.push(node.left.val);
      }
      if (node.right) {
        arr1.push(node.right);
        arr2.push(node.right.val);
      }
    });

    if (arr1.length) {
      array1.push(arr1);
      array2.push(arr2);
    } else {
      break;
    }
    pointer++;
  }

  return array2;
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

log(levelOrder(node1)); // output == [[3],[9,20],[15,7]]

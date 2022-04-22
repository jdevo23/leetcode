/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const { node1, node8, node12 } = require("./linkedLists");

var removeElements = function(head, val) {
  if (!head) {
    return head;
  }

  while (head && head.val === val) {
    head = head.next;
  }

  let current = head;

  while (current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

console.log(removeElements(node1, 6));    // output = [1,2,3,4,5]
console.log(removeElements(node8, 7));    // output = []
console.log(removeElements(null, 1));     // output = []
console.log(removeElements(node12, 1));   // output = [2]

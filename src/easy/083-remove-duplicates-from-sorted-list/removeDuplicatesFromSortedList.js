/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const { node1, node4, node9 } = require('./linkedLists');

var deleteDuplicates = function(head) {
  const map = {};

  let current = head;
  let prev = new ListNode(-1, current);

  while (current) {
    if (map[String(current.val)]) {
      prev.next = current.next;
    } else {
      map[current.val] = String(current.val);
      prev = prev.next;
    }
    current = current.next;
  }

  return head;
};

console.log(deleteDuplicates(node1));   // output = [1,2]
console.log(deleteDuplicates(node4));   // output = [1,2,3]
console.log(deleteDuplicates(node9));   // output = [0]

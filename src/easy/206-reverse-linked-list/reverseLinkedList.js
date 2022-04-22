/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const { node1, node6, node8 } = require('./linkedLists');

var reverseList = function(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

console.log(reverseList(node1)); // output = [5,4,3,2,1]
console.log(reverseList(node6)); // output = [2,1]
console.log(reverseList(node8)); // output = []

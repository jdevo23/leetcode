/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
};

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function LinkedList(head = null) {
  this.head = head;
}

const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;
const list1 = new LinkedList(node1);

const node5 = new ListNode(1);
const node6 = new ListNode(2);
node5.next = node6;
node6.next = node5;
const list2 = new LinkedList(node5);

const node7 = new ListNode(1);
const list3 = new LinkedList(node7);

console.log(hasCycle(node1));   // output == true
console.log(hasCycle(node5));   // output == true
console.log(hasCycle(node7));   // output == false
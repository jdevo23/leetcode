function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function LinkedList(head = null) {
  this.head = head;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(4);
node1.next = node2;
node2.next = node3;
const l1 = new LinkedList(node1);

const node4 = new ListNode(1);
const node5 = new ListNode(3);
const node6 = new ListNode(4);
node4.next = node5;
node5.next = node6;
const l2 = new LinkedList(node4);

module.exports = { l1, l2 };

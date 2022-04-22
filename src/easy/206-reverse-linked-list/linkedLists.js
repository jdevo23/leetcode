function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const node6 = new ListNode(1);
const node7 = new ListNode(2);
node6.next = node7;

const node8 = new ListNode(null);

module.exports = { node1, node6, node8 };

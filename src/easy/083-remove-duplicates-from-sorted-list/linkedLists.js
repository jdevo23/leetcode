function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node1 = new ListNode(1);
const node2 = new ListNode(1);
const node3 = new ListNode(2);
node1.next = node2;
node2.next = node3;

const node4 = new ListNode(1);
const node5 = new ListNode(1);
const node6 = new ListNode(2);
const node7 = new ListNode(3);
const node8 = new ListNode(3);
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;

const node9 = new ListNode(0);
const node10 = new ListNode(0);
const node11 = new ListNode(0);
const node12 = new ListNode(0);
node9.next = node10;
node10.next = node11;
node11.next = node12;

module.exports = { node1, node4, node9 };

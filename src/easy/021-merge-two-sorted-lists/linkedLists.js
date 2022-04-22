function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(4);
node1.next = node2;
node2.next = node3;

const node4 = new ListNode(1);
const node5 = new ListNode(3);
const node6 = new ListNode(4);
node4.next = node5;
node5.next = node6;

module.exports = { node1, node4 };

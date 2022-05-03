from typing import Optional


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class LinkedList:
    def __init__(self, head: None):
        self.head = head


class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow = head
        fast = head

        while (fast and fast.next and fast.next.next):
            slow = slow.next
            fast = fast.next.next

            if slow == fast:
                return True

        return False


node1 = ListNode(3)
node2 = ListNode(2)
node3 = ListNode(0)
node4 = ListNode(-4)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2
list1 = LinkedList(node1)

node5 = ListNode(1)
node6 = ListNode(2)
node5.next = node6
node6.next = node5
list2 = LinkedList(node5)

node7 = ListNode(1)
list3 = LinkedList(node7)

testSolution = Solution()

print(testSolution.hasCycle(node1))   # output == true
print(testSolution.hasCycle(node5))   # output == true
print(testSolution.hasCycle(node7))   # output == false

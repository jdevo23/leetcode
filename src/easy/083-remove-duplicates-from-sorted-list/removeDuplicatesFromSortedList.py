from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        map = {}

        current = head
        prev = ListNode(-1, current)

        while (current):
          if (current.val in map):
            prev.next = current.next
          else:
            map[current.val] = current.val
            prev = prev.next
          current = current.next
        
        return head
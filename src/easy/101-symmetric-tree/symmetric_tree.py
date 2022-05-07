from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return False

        stack = [root.left, root.right]

        while stack:
            node1 = stack.pop(0)
            node2 = stack.pop(0)

            if node1 is None and node2 is None:
                continue

            if (node1 is None and node2 is not None) or (node1 is not None and node2 is None):
                return False

            if node1.val != node2.val:
                return False

            stack.append(node1.left)
            stack.append(node2.right)
            stack.append(node1.right)
            stack.append(node2.left)

        return True

from typing import Optional, List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def postorderTraversalRecursive(self, root: Optional[TreeNode]) -> List[int]:
        array = []

        def recurse(node: Optional[TreeNode]) -> None:
            if node is None:
                return
            if node.left:
                recurse(node.left)
            if node.right:
                recurse(node.right)

            array.append(node.val)

        recurse(root)
        return array

    def postorderTraversalIterative(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []

        stack1, stack2 = [root], []

        while stack1:
            root = stack1.pop()
            if root:
                stack2.insert(0, root.val)
            if root.left:
                stack1.append(root.left)
            if root.right:
                stack1.append(root.right)

        return stack2

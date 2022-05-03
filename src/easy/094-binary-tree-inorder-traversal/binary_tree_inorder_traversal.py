from typing import Optional, List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def inorderTraversalRecursive(self, root: Optional[TreeNode]) -> List[int]:
        array = []

        def recurse(node: Optional[TreeNode]) -> None:
            if node is None:
                return

            if node.left:
                recurse(node.left)

            array.append(node.val)

            if node.right:
                recurse(node.right)

        recurse(root)

        return array

    def inorderTraversalIterative(self, root: Optional[TreeNode]) -> List[int]:
        stack, results = [], []

        while root or stack:
            if root:
                stack.append(root)
                root = root.left
            else:
                root = stack.pop()
                results.append(root.val)
                root = root.right

        return results

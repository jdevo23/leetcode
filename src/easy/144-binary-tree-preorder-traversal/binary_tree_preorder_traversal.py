from typing import Optional, List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def preorderTraversalRecursive(self, root: Optional[TreeNode]) -> List[int]:
        array = []

        def recurse(node: Optional[TreeNode]) -> None:
            if node is None:
                return

            if node.val:
                array.append(node.val)

            if node.left:
                recurse(node.left)

            if node.right:
                recurse(node.right)

        recurse(root)

        return array

    def preorderTraversalIterative(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []

        stack = [root]
        results = []

        while stack:
            results.append(root.val)
            if root.right:
                stack.append(root.right)
            if root.left:
                stack.append(root.left)
            root = stack.pop()

        return results


testSolution = Solution()

node1 = TreeNode(1)
node2 = TreeNode(2)
node3 = TreeNode(3)

node1.right = node2
node2.left = node3

print(testSolution.preorderTraversalRecursive(node1))  # output == [1,2,3]
print(testSolution.preorderTraversalIterative(node1))  # output == [1,2,3]

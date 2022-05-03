from typing import Optional, List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []

        level, results = [root], []

        while level:
            temp_level, temp_results = [], []

            for node in level:
                temp_results.append(node.val)
                if node.left:
                    temp_level.append(node.left)
                if node.right:
                    temp_level.append(node.right)

            results.append(temp_results)
            level = temp_level

        return results


testSolution = Solution()

node1 = TreeNode(3)
node2 = TreeNode(9)
node3 = TreeNode(20)
node4 = TreeNode(15)
node5 = TreeNode(7)

node1.left = node2
node1.right = node3
node3.left = node4
node3.right = node5

print(testSolution.levelOrder(node1))   # output == [[3],[9,20],[15,7]]

from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        answer = 0

        if not root:
          return answer
        
        def recurse(node: Optional[TreeNode], count: int) -> None:
          count += 1
          nonlocal answer
          answer = max(answer, count)

          if not node:
            return

          if node.left:
            recurse(node.left, count)

          if node.right:
            recurse(node.right, count)
          
        recurse(root, answer)

        return answer
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root is None:
            return None
        
        def recurse(node) -> None:
            if not node:
                return
            
            left = node.left
            right = node.right

            node.left = right
            node.right = left

            if node.right:
                recurse(node.right)

            if node.left:
                recurse(node.left)
        
        recurse(root)
        return root
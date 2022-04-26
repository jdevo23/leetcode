from typing import Optional, List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def inorderTraversalRecursive(self, root: Optional[TreeNode]) -> List[int]:
        list = []

        def recurse(self, node: Optional[TreeNode]) -> None:
          if (node == None):
            return
          
          if (node.left):
            recurse(self, node.left)
          
          list.append(node.val)

          if (node.right):
            recurse(self, node.right)
          
        recurse(self, root)

        return list
    
    def inorderTraversalIterative(self, root: Optional[TreeNode]) -> List[int]:
      stack, results = [], []

      while (root or stack):
        if (root):
          stack.append(root)
          root = root.left
        else:
          root = stack.pop()
          results.append(root.val)
          root = root.right
      
      return results
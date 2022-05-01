from typing import Optional, List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if (root == None):
          return []
        
        array1, array2 = [[root]], [[root.val]]

        pointer = 0

        while(True):
          arr1, arr2 = [], []
          
          for node in array1[pointer]:
            if (node.left):
              arr1.append(node.left)
              arr2.append(node.left.val)
            if (node.right):
              arr1.append(node.right)
              arr2.append(node.right.val)
            
          if (len(arr1) != 0):
            array1.append(arr1)
            array2.append(arr2)
          else:
            return array2

          pointer += 1

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
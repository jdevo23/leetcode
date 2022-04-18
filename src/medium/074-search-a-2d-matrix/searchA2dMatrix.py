from typing import List

class Solution:
    def binaryTreeQuery(self, array: List[int], target: int) -> bool:
      if (len(array) == 1):
        return array[0] == target
      
      m = len(array)
      subTreeLeft = array[0:m/2]
      subTreeRight = array[m/2:]

      return self.binaryTreeQuery(subTreeLeft if subTreeLeft[len(subTreeLeft) - 1] >= target else subTreeRight, target)

    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        array = []
        for x in matrix:
          for y in x:
            array.append(y)
        return self.binaryTreeQuery(array, target)

testSolution = Solution()
print(Solution.searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));   # output == true
print(Solution.searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));  # output == false
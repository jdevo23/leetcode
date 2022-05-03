from typing import List


class Solution:
    def binaryTreeQuery(self, array: List[int], target: int) -> bool:
        if len(array) == 1:
            return array[0] == target

        _m = len(array)
        sub_tree_left = array[0:_m/2]
        sub_tree_right = array[_m/2:]

        return self.binaryTreeQuery(sub_tree_left if sub_tree_left[len(sub_tree_left) - 1] >= target else sub_tree_right, target)

    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        array = []
        for _x in matrix:
            for _y in _x:
                array.append(_y)
        return self.binaryTreeQuery(array, target)


testSolution = Solution()
print(Solution.searchMatrix(
    [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))   # output == true
print(Solution.searchMatrix(
    [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13))  # output == false

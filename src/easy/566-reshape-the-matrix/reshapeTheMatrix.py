from typing import List

class Solution:
    def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:
        m = len(mat)
        n = len(mat[0])

        if (m*n != r*c):
          return mat

        list = []
        output = []

        for x in mat:
          for y in x:
            list.append(y)

        i = 0
        length = len(list)

        while (i < length):
          slice_end = i + (length // r)
          items = list[i:slice_end]
          output.append(items)
          i += (length // r)

        return output

testSolution = Solution()
print(testSolution.matrixReshape([[1,2],[3,4]], 1, 4));                                                     # output == [[1,2,3,4]]
print(testSolution.matrixReshape([[1,2],[3,4]], 2, 4));                                                     # output == [[1,2],[3,4]]
print(testSolution.matrixReshape([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]], 42, 5));   # output == [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]]

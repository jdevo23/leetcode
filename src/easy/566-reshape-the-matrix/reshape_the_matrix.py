from typing import List


class Solution:
    def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:
        _m = len(mat)
        _n = len(mat[0])

        if _m*_n != r*c:
            return mat

        array = []
        output = []

        for _x in mat:
            for _y in _x:
                array.append(_y)

        i = 0
        length = len(array)

        while i < length:
            slice_end = i + (length // r)
            items = array[i:slice_end]
            output.append(items)
            i += (length // r)

        return output


testSolution = Solution()

print(testSolution.matrixReshape([[1, 2], [3, 4]], 1, 4))   # output == [[1,2,3,4]]
print(testSolution.matrixReshape([[1, 2], [3, 4]], 2, 4))   # output == [[1,2],[3,4]]
print(testSolution.matrixReshape([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [
      17, 18, 19, 20]], 42, 5))   # output == [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]]

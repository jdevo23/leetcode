from typing import List


class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        output = []
        i = 0

        while i < numRows:
            arr = []

            for j in range(i + 1):
                if (i > 0 and j > 0 and j < i):
                    k = output[i - 1][j - 1] + output[i - 1][j]
                    arr.append(k)
                else:
                    arr.append(1)

            output.append(arr)
            i += 1

        return output


testSolution = Solution()
print(testSolution.generate(1))  # output == [[1]]
print(testSolution.generate(5))  # output == [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

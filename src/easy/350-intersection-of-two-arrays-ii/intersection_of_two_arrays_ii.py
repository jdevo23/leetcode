from typing import List
from collections import Counter


class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        _c = Counter(nums1)
        output = []

        for _n in nums2:
            if _c[_n] > 0:
                output.append(_n)
                _c[_n] -= 1

        return output


testSolution = Solution()
print(testSolution.intersect([1, 2, 2, 1], [2, 2]))         # output == [2,2]
print(testSolution.intersect([4, 9, 5], [9, 4, 9, 8, 4]))   # output == [4,9] || [9,4]

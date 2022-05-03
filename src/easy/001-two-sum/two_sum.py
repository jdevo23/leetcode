from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        obj = {}

        for i, value in enumerate(nums):
            if target - value in obj:
                return [obj[target - value], i]
            else:
                obj[value] = i

        return []


testSolution = Solution()

print(testSolution.twoSum(nums=[2, 7, 11, 15], target=9))   # output = [0,1]
print(testSolution.twoSum(nums=[3, 2, 4], target=6))        # output = [1,2]
print(testSolution.twoSum(nums=[3, 3], target=6))           # output = [0,1]

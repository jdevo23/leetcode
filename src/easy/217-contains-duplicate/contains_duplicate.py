from typing import List


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        obj = {}

        for i in nums:
            if i in obj:
                return True
            else:
                obj[i] = 1

        if len(obj) == len(nums):
            return False

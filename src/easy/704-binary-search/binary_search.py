from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        keys = [i for i, _x in enumerate(nums)]

        def recurse(keys: List[int]) -> int:
            mid = len(keys) // 2
            num = nums[keys[mid]]

            if num == target:
                return keys[mid]

            split_a = keys[:mid]
            split_b = keys[mid+1:]

            if split_a and target < num:
                return recurse(split_a)

            if split_b and target > num:
                return recurse(split_b)

            return -1

        return recurse(keys)


test_solution = Solution()

# expected output is index of target
print(test_solution.search([-1, 0, 3, 5, 9, 12], 9))  # output == 4
print(test_solution.search([-1, 0, 3, 5, 9, 12], 2))  # output == -1
print(test_solution.search([2, 5], 5))                # output == 1

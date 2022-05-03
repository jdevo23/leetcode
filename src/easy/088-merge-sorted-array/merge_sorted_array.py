from typing import List


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        left = nums1[:m]

        n_l = len(left)
        n_r = len(nums2)
        i = 0
        j = 0
        k = 0

        while i < n_l and j < n_r:
            if left[i] <= nums2[j]:
                nums1[k] = left[i]
                i += 1
            else:
                nums1[k] = nums2[j]
                j += 1

            k += 1

        while i < n_l:
            nums1[k] = left[i]
            i += 1
            k += 1

        while j < n_r:
            nums1[k] = nums2[j]
            j += 1
            k += 1

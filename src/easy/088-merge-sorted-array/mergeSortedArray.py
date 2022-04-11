from typing import List

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        left = nums1[:m]

        nL = len(left)
        nR = len(nums2)
        i = 0
        j = 0
        k = 0

        while (i < nL and j < nR):
          if left[i] <= nums2[j]:
            nums1[k] = left[i]
            i+=1
          else:
            nums1[k] = nums2[j]
            j += 1
          
          k+=1

        while (i < nL):
          nums1[k] = left[i]
          i+=1
          k+=1
          
        while (j < nR):
          nums1[k] = nums2[j]
          j+=1
          k+=1
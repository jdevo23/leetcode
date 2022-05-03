from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_price = 0
        _l = 0
        _r = 1
        length = len(prices)

        while _r < length:
            if prices[_r] > prices[_l]:
                max_price = max(prices[_r] - prices[_l], max_price)
            else:
                _l = _r
            _r += 1

        return max_price


testSolution = Solution()
print(testSolution.maxProfit([7, 1, 5, 3, 6, 4]))   # output == 5
print(testSolution.maxProfit([7, 6, 4, 3, 1]))      # output == 0
print(testSolution.maxProfit([1, 2]))               # output == 1

class Solution:
    def firstUniqChar(self, s: str) -> int:
        _map = {}

        for _x in s:
            if _x in _map:
                _map[_x] = _map[_x] + 1
            else:
                _map[_x] = 1

        for i, item in enumerate(s):
            if _map[item] == 1:
                return i

        return -1


testSolution = Solution()

print(testSolution.firstUniqChar("leetcode"))        # output == 0
print(testSolution.firstUniqChar("loveleetcode"))    # output == 2
print(testSolution.firstUniqChar("aabb"))            # output == -1

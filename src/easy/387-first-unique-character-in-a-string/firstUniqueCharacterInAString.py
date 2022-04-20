class Solution:
    def firstUniqChar(self, s: str) -> int:
      map = {}

      for x in s:
        if x in map:
          map[x] = map[x] + 1
        else:
          map[x] = 1

      for i in range(len(s)):
        if map[s[i]] == 1:
          return i

      return -1

testSolution = Solution()        

print(testSolution.firstUniqChar("leetcode"));        # output == 0
print(testSolution.firstUniqChar("loveleetcode"));    # output == 2
print(testSolution.firstUniqChar("aabb"));            # output == -1
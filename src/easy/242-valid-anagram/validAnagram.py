class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        lenS = len(s)

        if (lenS != len(t)):
          return False

        list = [0]*26

        for i in range(lenS):
          list[ord(s[i]) - 97] += 1
          list[ord(t[i]) - 97] -= 1
        
        for x in list:
          if x > 0:
            return False
        
        return True

testSolution = Solution()

print(testSolution.validAnagram("anagram", "nagaram")); # output == true
print(testSolution.validAnagram("rat", "car"));         # output == false
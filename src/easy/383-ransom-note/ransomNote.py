class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        map = {}

        for x in ransomNote:
          if x in map:
            map[x] = map[x] + 1
          else:
            map[x] = 1

        for x in magazine:
          if x in map:
            map[x] = map[x] - 1
        
        return all(i <= 0 for i in map.values())

testSolution = Solution()

print(testSolution.canConstruct("a", "b"));                                                        # output == false
print(testSolution.canConstruct("aa", "ab"));                                                      # output == false
print(testSolution.canConstruct("aa", "aab"));                                                     # output == true
print(testSolution.canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"));    # output == true
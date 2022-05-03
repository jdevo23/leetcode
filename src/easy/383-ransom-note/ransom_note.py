class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        _map = {}

        for _x in ransomNote:
            if _x in _map:
                _map[_x] = _map[_x] + 1
            else:
                _map[_x] = 1

        for _x in magazine:
            if _x in _map:
                _map[_x] = _map[_x] - 1

        return all(i <= 0 for i in _map.values())


testSolution = Solution()

print(testSolution.canConstruct("a", "b"))                                                          # output == false
print(testSolution.canConstruct("aa", "ab"))                                                        # output == false
print(testSolution.canConstruct("aa", "aab"))                                                       # output == true
print(testSolution.canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"))      # output == true

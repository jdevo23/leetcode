class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        len_s = len(s)

        if len_s != len(t):
            return False

        array = [0]*26

        for i in range(len_s):
            array[ord(s[i]) - 97] += 1
            array[ord(t[i]) - 97] -= 1

        for _x in array:
            if _x > 0:
                return False

        return True


testSolution = Solution()

print(testSolution.isAnagram("anagram", "nagaram"))   # output == true
print(testSolution.isAnagram("rat", "car"))           # output == false

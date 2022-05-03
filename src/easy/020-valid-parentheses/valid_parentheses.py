class Solution:
    def isValid(self, s: str) -> bool:
        size = len(s)

        if (size <= 0 or size % 2 != 0):
            return False

        hashmap = {
            "(": ")",
            "[": "]",
            "{": "}",
        }

        stack = []

        for _x in s:
            if _x in hashmap:
                stack.append(_x)
            else:
                if len(stack) == 0:
                    return False

                brace = stack.pop()
                if hashmap[brace] != _x:
                    return False

        return len(stack) == 0


testSolution = Solution()

print(testSolution.isValid("()"))       # output = True
print(testSolution.isValid("()[]{}"))   # output = True
print(testSolution.isValid("(]"))       # output = False
print(testSolution.isValid("(("))       # output = False
print(testSolution.isValid("){"))       # output == False

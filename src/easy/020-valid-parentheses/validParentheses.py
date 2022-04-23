class Solution:
    def isValid(self, s: str) -> bool:
        size = len(s)

        if (size <= 0 or size % 2 != 0):
          return False
        
        map = {
          "(" : ")",
          "[" : "]",
          "{" : "}",
        }

        stack = []

        for x in s:
          if x in map:
            stack.append(x)
          else:
            if len(stack) == 0:
              return False
            
            brace = stack.pop()
            if map[brace] != x:
              return False
        
        return len(stack) == 0

testSolution = Solution()

print(testSolution.isValid("()"));       # output = True
print(testSolution.isValid("()[]{}"));   # output = True
print(testSolution.isValid("(]"));       # output = False
print(testSolution.isValid("(("));       # output = False
print(testSolution.isValid("){"));       # output == False

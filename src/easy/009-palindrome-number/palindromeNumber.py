class Solution:
    def isPalindrome(self, x: int) -> bool:
        x, i = list(str(x)), 0
        
        for y in x:
            if y != x[len(x) - 1 - i]:
                return False
            i+=1
            
        return True
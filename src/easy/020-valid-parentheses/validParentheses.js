/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length <= 0 || s.length % 2 !== 0) {
    return false;
  };

  const map = {
    "(" : ")",
    "[" : "]",
    "{" : "}",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      let brace = stack.pop();
      if (map[brace] !== s[i]) {
        return false;
      }
    }
  }

  return !stack.length;
};

console.log(isValid("()"));       // output = true
console.log(isValid("()[]{}"));   // output = true
console.log(isValid("(]"));       // output = false
console.log(isValid("(("));       // output = false

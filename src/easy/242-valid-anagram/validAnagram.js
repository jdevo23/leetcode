/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const counts = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    counts[s[i].charCodeAt(0) - 97]++;
    counts[t[i].charCodeAt(0) - 97]--;
  }

  for (let i = 0; i < counts.length; i++) {
    if (counts[i] > 0) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram")); // output == true
console.log(isAnagram("rat", "car"));         // output == false
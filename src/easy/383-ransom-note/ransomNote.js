/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = {};

  for (let i = 0; i < ransomNote.length; i++) {
    if (!map[ransomNote[i]]) {
      map[ransomNote[i]] = 1;
    } else {
      map[ransomNote[i]] = map[ransomNote[i]] + 1;
    }
  }

  for (let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]]) {
      map[magazine[i]] = map[magazine[i]] - 1;
    }
  }

  for (const key in map) {
    if (map[key] > 0) {
      return false;
    }
  }

  return true;
};

console.log(canConstruct("a", "b"));                                                        // output == false
console.log(canConstruct("aa", "ab"));                                                      // output == false
console.log(canConstruct("aa", "aab"));                                                     // output == true
console.log(canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"));    // output == true

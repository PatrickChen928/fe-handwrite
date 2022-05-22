// https://leetcode.cn/problems/group-anagrams/
// 49. 字母异位词分组

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const n = strs.length;
  const list = [];
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const str = strs[i];
    const newStr = str.split('').sort().join('');
    if (map.get(newStr)) {
      map.get(newStr).push(str);
    } else {
      map.set(newStr, [str]);
    }
  }
  return Array.from(map.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// [["bat"],["nat","tan"],["ate","eat","tea"]]
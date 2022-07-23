// https://leetcode.cn/problems/longest-common-prefix/
// 14. 最长公共前缀

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const n = strs.length;
  const str = strs[0];
  let ans = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    for (let i = 1; i < n; i++) {
      const s = strs[i][ans];
      if (char !== s) return str.substring(0, ans);
    }
    ans++;
  }
  return str.substring(0, ans);
};

console.log(longestCommonPrefix(["flower","flow","flight"]))

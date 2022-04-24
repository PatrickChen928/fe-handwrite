// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
// 3. 无重复字符的最长子串

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const n = s.length;
  if (n === 0) return 0;
  if (n === 1) return 1;
  let ans = 0;
  let arr = [s[0]];
  for (let i = 1; i < n; i++) {
    let curr = s[i];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === curr) {
        ans = Math.max(arr.length, ans);
        arr = arr.slice(j + 1);
        break;
      }
    }
    arr.push(curr)
  }
  ans = Math.max(arr.length, ans);
  return ans;
};

console.log(lengthOfLongestSubstring("pwwkew"))
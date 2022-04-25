// https://leetcode-cn.com/problems/longest-repeating-character-replacement/
// 424. 替换后的最长重复字符

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const nums = new Array(26).fill(0);
  const ACode = 'A'.charCodeAt();
  const n = s.length;
  let left = 0, right = 0, max = 0;
  while (right < n) {
    let index = s[right].charCodeAt() - ACode;
    nums[index]++;
    max = Math.max(max, nums[index]);
    if (right - left + 1 - max > k) {
      nums[s[left].charCodeAt() - ACode]--;
      left++;
    }
    right++;
  }
  return right - left;
};

console.log(characterReplacement("BAAA", 0))
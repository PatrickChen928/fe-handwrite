// https://leetcode.cn/problems/minimum-window-substring/
// 76. 最小覆盖子串

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const n1 = s.length;
  const n2 = t.length;
  if (n2 > n1) return '';
  const ap = 'A'.charCodeAt();
  const arr = new Array('z'.charCodeAt() - ap + 1).fill(0);
  let left = 0, right = 0, start = -1;
  let len = Infinity;
  let count = n2;
  for (let i = 0; i < n2; i++) {
    arr[t[i].charCodeAt() - ap]++;
  }
  while(right < n1) {
    const index = s[right].charCodeAt() - ap;
    if (arr[index] > 0) {
      count--;
    }
    arr[index]--;
    if (count === 0) {
      while(left < right && arr[s[left].charCodeAt() - ap] < 0) {
        arr[s[left].charCodeAt() - ap]++;
        left++;
      }
      if (right - left + 1 < len) {
        len = right - left + 1;
        start = left;
      }
      arr[s[left].charCodeAt() - ap]++;
      left++;
      count++;
    }
    right++;
  }
  return start === -1 ? '' : s.substring(start, start + len);
};

console.log(minWindow("cgklivwehljxrdzpfdqsapogwvjtvbzahjnsejwnuhmomlfsrvmrnczjzjevkdvroiluthhpqtffhlzyglrvorgnalk"
,"mqfff"));

// https://leetcode.cn/problems/hamming-distance/
// 461. 汉明距离

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let s = x ^ y, ans = 0;
  while (s > 0) {
    if (s & 1) {
      ans++;
    }
    s = s >> 1;
  }
  return ans;
};

console.log(hammingDistance(1, 4));
// https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
// 剑指 Offer 15. 二进制中1的个数

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let ans = 0;
  while(n != 0) {
    let c = n & -n;
    if (c != 0) {
      ans++;
    }
    n ^= c;
  }
  return ans;
};

console.log(hammingWeight(11));
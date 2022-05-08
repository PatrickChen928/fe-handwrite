// https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/
// 剑指 Offer 65. 不用加减乘除做加法

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
  while(b != 0) {
    let c = (a & b) << 1;
    a ^= b;
    b = c;
  }
  return a;
};

console.log(add(1, 10));
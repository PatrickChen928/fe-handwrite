// https://leetcode-cn.com/problems/single-number-ii/
// 137. 只出现一次的数字 II

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // 1. 依次确立每一位二进制
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    let total = 0;
    for (let num of nums) {
      total += (num >> i) & 1;
    }
    if (total % 3 != 0) {
      ans |= 1 << i
    }
  }
  return ans;

  // 2. 数字电路 - 不懂
  // let a = 0, b = 0;
  // for (const num of nums) {
  //   b = ~a & (b ^ num);
  //   a = ~b & (a ^ num);
  //   console.log(a, b)
  // }
  // return b;
};

console.log(singleNumber([2,2,3,2]))
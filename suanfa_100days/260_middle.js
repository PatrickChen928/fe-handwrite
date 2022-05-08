// https://leetcode-cn.com/problems/single-number-iii/
// 260. 只出现一次的数字 III

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let sum = 0;
  for (let num of nums) {
    sum ^= num;
  }
  const ln = sum & -sum;
  let val1 = 0, val2 = 0;
  for (let num of nums) {
    if (num & ln) {
      val1 ^= num;
    } else {
      val2 ^= num;
    }
  }
  return [val1, val2];
};

console.log(singleNumber([1,2,1,3,2,5]));

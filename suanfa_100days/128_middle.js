// https://leetcode.cn/problems/longest-consecutive-sequence/
// 128. 最长连续序列

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  // 1. 排序
  // nums.sort((a, b) => a - b);
  // const n = nums.length;
  // let ans = 0;
  // let prev = 1;
  // for (let i = 1; i < n; i++) {
  //   if (nums[i] === nums[i - 1] + 1) {
  //     prev++;
  //   } else {
  //     ans = Math.max(ans, prev);
  //     prev = 1;
  //   }
  // }
  // ans = Math.max(ans, prev);
  // return ans;

  // 2. O(n)
  const n = nums.length;
  const map = {};
  let ans = 0;
  for (let i = 0; i < n; i++) {
    map[nums[i]] = 1;
  }
  for (let num in map) {
    if (!map[num - 1]) {
      let curr = 1;
      let currNum = Number(num);
      while (map[currNum + 1]) {
        currNum += 1;
        curr += 1;
      }
      ans = Math.max(ans, curr);
    }
  }
  return ans;
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
// https://leetcode-cn.com/problems/next-greater-element-i/
// 496. 下一个更大元素 I

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  // 1. 暴力法
  const n1 = nums1.length;
  const n2 = nums2.length;
  // const ans = [];
  // for (let i = 0; i < n1; i++) {
  //   let begin = -1;
  //   let j = 0;
  //   for (; j < n2; j++) {
  //     if (nums2[j] === nums1[i]) {
  //       begin = j;
  //     }
  //     if (nums2[j] > nums1[i] && begin != -1) {
  //       ans.push(nums2[j]);
  //       break;
  //     }
  //   }
  //   if (j === n2) {
  //     ans.push(-1);
  //   }
  // }
  // return ans;
  // 2. 单调栈 + 哈希表
  const stack = [];
  const map = {};
  for (let i = n2 - 1; i >= 0; i--) {
    const num = nums2[i];
    while(stack.length && num >= stack[stack.length - 1]) {
      stack.pop();
    }
    map[num] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(num);
  }
  return new Array(n1).fill(0).map((_, i) => map[nums1[i]]);
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2]));
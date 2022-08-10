// https://leetcode.cn/problems/3sum-closest/
// 16. 最接近的三数之和

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  // 排序 + 双指针
  nums = nums.sort((a, b) => a - b);
  let res = Infinity;
  const n = nums.length;
  function getClosest(a, b) {
    const a1 = Math.abs(a - target);
    const b1 = Math.abs(b - target);
    console.log(a, b)
    return a1 > b1 ? b : a;
  }
  for (let i = 0; i < n; i++) {
    // if (nums[i] > target) {
    //   if (i === 0){
    //     return nums[0] + nums[1] + nums[2];
    //   } else {
    //     return res;
    //   }
    // }
    let L = i + 1;
    let R = n - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      const sub = sum - target;
      res = getClosest(res, sum);
      if (sub < 0) {
        L++;
        while(L < R && nums[L] === nums[L - 1]) L++;
      } else if(sub > 0) {
        R--
        while(L < R && nums[R] === nums[R + 1]) R--;
      } else {
        return target;
      }
    }
  }
  return res;
};

// console.log(threeSumClosest([-1,2,1,-4], 1));
// console.log(threeSumClosest([0, 0, 0], 1));
console.log(threeSumClosest([-100,-98,-2,-1], -101));

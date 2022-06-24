// https://leetcode.cn/problems/counting-bits/
// 338. 比特位计数

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  // 1. 
  // const countOnes = (x) => {
  //   let count = 0;
  //   while(x > 0) {
  //     x &= x - 1;
  //     count++;
  //   }
  //   return count;
  // }
  // const ans = new Array(n + 1);
  // for (let i = 0; i <= n; i++) {
  //   ans[i] = countOnes(i);
  // }
  // return ans;

  // 2. 动态规划
  const bits = new Array(n + 1).fill(0);
  let highBit = 0;
  for (let i = 1; i <= n; i++) {
    if ((i & (i - 1)) == 0) {
      highBit = i;
    }
    bits[i] = bits[i - highBit] + 1;
  }
  return bits;
};

console.log(countBits(2));
// https://leetcode-cn.com/problems/monotone-increasing-digits/
// 738. 单调递增的数字

/**
 * @param {number} n
 * @return {number}
 */
 var monotoneIncreasingDigits = function(n) {
  if (n < 10) {
    return n;
  }
  let strNums = String(n).split('').map(v => +v);
  const l = strNums.length;
  let m = 1;
  for (let i = 1; i < l; i++) {
    if (strNums[i - 1] <= strNums[i]) {
      m++;
    } else {
      break;
    }
  }
  while(m > 0 && strNums[m - 1] > strNums[m]) {
    strNums[m - 1] = Number(strNums[m - 1]) - 1;
    m--;
  }
  for (m += 1; m < l; m++) {
    strNums[m] = 9 
  }
  return Number(strNums.join(''));
};

console.log(monotoneIncreasingDigits(100))
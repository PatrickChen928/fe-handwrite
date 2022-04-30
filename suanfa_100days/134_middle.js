// https://leetcode-cn.com/problems/gas-station/
// 134. 加油站

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
  const n = gas.length;
  let begin = 0;
  // 1. 暴力法
  while (begin < n) {
    let left = gas[begin] - cost[begin];
    if (left >= 0) {
      for (let i = begin + 1; i < n; i++) {
        left += gas[i];
        left -= cost[i];
        if (left < 0) {
          // 精髓!!
          begin = i;
          break;
        }
      }
      if (left >= 0) {
        for (let i = 0; i < begin; i++) {
          left += gas[i];
          left -= cost[i];
          if (left < 0) {
            break;
          }
        }
        if (left >= 0) {
          return begin;
        }
      }
    }
    begin++;
  }
  return -1;
};

console.log(canCompleteCircuit([5,8,2,8], [6,5,6,6]));
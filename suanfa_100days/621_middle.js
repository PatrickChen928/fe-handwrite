// https://leetcode.cn/problems/task-scheduler/
// 621. 任务调度器

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  const freq = new Array(26).fill(0);
  const aNum = 'A'.charCodeAt();
  for (let i = 0; i < tasks.length; i++) {
    freq[tasks[i].charCodeAt() - aNum]++;
  }
  // 出现最多的次数
  let count = 0;
  for (let i = 0; i < freq.length; i++) {
    if (count < freq[i]) count = freq[i];
  }

  // 具有最多执行次数的任务数量
  let maxCount = 0
  for (let i = 0; i < freq.length; i++) {
    if (count === freq[i]) maxCount++;
  }

  return Math.max((count - 1) * (n + 1) + maxCount, tasks.length);
};

console.log(leastInterval(["A","A","A","B","B","B"], 2)); // 8
console.log(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2)); // 16
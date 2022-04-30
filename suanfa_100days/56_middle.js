// https://leetcode-cn.com/problems/merge-intervals/
// 56. 合并区间

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let end = intervals[0][1];
  let begin = intervals[0][0]
  const ans = [];
  for (let i = 1; i < intervals.length; i++) {
    const val = intervals[i];
    if (val[0] > end) {
      ans.push([begin, end]);
      begin = val[0];
      end = val[1];
    } else {
      end = Math.max(end, val[1]);
    }
  }
  ans.push([begin, end]);
  return ans;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
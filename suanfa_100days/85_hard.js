// https://leetcode.cn/problems/maximal-rectangle/
// 85. 最大矩形

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const m = matrix.length;
  if (m === 0) {
      return 0;
  }
  const n = matrix[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (j === 0) {
        matrix[j][i] = Number(matrix[j][i]);
      } else {
        matrix[j][i] = matrix[j][i] == '1' ? (matrix[j - 1][i] + 1) : 0;
      }
    }
  }
  let max = 0;
  for (let i = 0; i < m; i++) {
    const stack = [];
    for (let j = 0; j <= n; j++) {
      while(stack.length && matrix[i][stack[stack.length - 1]] > (matrix[i][j] || 0)) {
        const top = stack.pop();
        max = Math.max(max, (j - ((stack[stack.length - 1]) ?? -1) - 1) * matrix[i][top]);
      }
      stack.push(j);
    }
  }
  return max;
};

console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]))
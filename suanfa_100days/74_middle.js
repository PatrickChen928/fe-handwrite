// https://leetcode-cn.com/problems/search-a-2d-matrix/
// 74. 搜索二维矩阵

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let l = 0, r = m - 1, cm;
  while(l <= r && cm === undefined) {
    let mid = (l + r) >> 1;
    if (matrix[mid][0] <= target) {
      if (matrix[mid][n - 1] >= target) {
        cm = mid;
      } else {
        l = mid + 1;
      }
    } else {
      r = mid - 1;
    }
  }
  if (cm === undefined) {
    return false;
  }
  l = 0; r = n - 1;
  let arr = matrix[cm];
  console.log(cm)
  while(l <= r) {
    let mid = (l + r) >> 1;
    if (arr[mid] < target) {
      l = mid + 1;
    } else if (arr[mid] > target) {
      r = mid - 1;
    } else {
      return true;
    }
  }
  return false
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));
// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
// 4. 寻找两个正序数组的中位数

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  // 二分查找
  // const n = nums1.length + nums2.length;
  // const mid = n >>1;
  // if (n % 2 === 1) {
  //   return getEle(nums1, nums2, mid + 1);
  // } else {
  //   const val1 = getEle(nums1, nums2, mid + 1);
  //   const val2 = getEle(nums1, nums2, mid);
  //   return (val1 + val2) / 2;
  // }

  // 划分数组
  const m = nums1.length, n = nums2.length;
  if (m > n) {
    return findMedianSortedArrays(nums2, nums1);
  }
  let num1 = 0, num2 = 0;
  let left = 0, right = m;
  while (left <= right) {
    let i = (left + right) >> 1;
    let j = Math.ceil((m + n) / 2) - i;
    const num_m1 = i === 0 ? -Infinity : nums1[i - 1];
    const num_m2 = i === m ? Infinity : nums1[i];
    const num_n1 = j === 0 ? -Infinity : nums2[j - 1];
    const num_n2 = j === n ? Infinity : nums2[j];
    if (num_m1 <= num_n2) {
      num1 = Math.max(num_m1, num_n1);
      num2 = Math.min(num_m2, num_n2);
      left = i + 1;
    } else {
      right = i - 1;
    }
  }
  return (m + n) % 2 === 0 ? (num1 + num2) / 2 : num1;
};

function getEle(list1, list2, k) {
  const n1 = list1.length, n2 = list2.length;
  let index1 = 0, index2 = 0;
  while(true) {
    if (index1 === n1) {
      return list2[index2 + k - 1];
    }
    if (index2 === n2) {
      return list1[index1 + k - 1];
    }
    if (k === 1) {
      return Math.min(list1[index1], list2[index2]);
    }
    const half = k >> 1;
    const newIndex1 = Math.min(index1 + half, n1) - 1;
    const newIndex2 = Math.min(index2 + half, n2) - 1;
    const pivot1 = list1[newIndex1], pivot2 = list2[newIndex2];
    if (pivot1 <= pivot2) {
      k -= newIndex1 - index1 + 1;
      index1 = newIndex1 + 1;
    } else {
      k -= newIndex2 - index2 + 1;
      index2 = newIndex2 + 1;
    }
  }
}

console.log(findMedianSortedArrays([1,3], [2]))
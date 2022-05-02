// https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
// 215. 数组中的第K个最大元素

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function(nums, k) {
//     // 快排
//   return quickSort(nums, k, 0, nums.length - 1);
// };

// function quickSort(nums, k, left, right) {
//   const index = Math.floor(Math.random() * (right - left)) + left;
//   const temp = nums[index];
//   nums[index] = nums[left];
//   let i = left, j = right;
//   while(i < j) {
//     while(i < j && nums[j] <= temp) {
//       j--;
//     }
//     nums[i] = nums[j];
//     while(i < j && nums[i] >= temp) {
//       i++;
//     }
//     nums[j] = nums[i];
//   }
//   nums[i] = temp;
//   if (i === k - 1) return nums[i];
//   else if (i < k - 1) return quickSort(nums, k, i + 1, right);
//   else return quickSort(nums, k, left, i - 1);
// }


function findKthLargest(nums, k) {
    let heapSize = nums.length;
    buildMaxHeap(nums, heapSize);
    console.log(nums)
    for (let i = nums.length - 1; i >= nums.length - k + 1; --i) {
        swap(nums, 0, i);
        --heapSize;
        maxHeapify(nums, 0, heapSize);
    }
    return nums[0];
}

function buildMaxHeap(a, heapSize) {
    for (let i = heapSize / 2; i >= 0; --i) {
        maxHeapify(a, i, heapSize);
    } 
}

function maxHeapify(a, i, heapSize) {
    let l = i * 2 + 1, r = i * 2 + 2, largest = i;
    if (l < heapSize && a[l] > a[largest]) {
        largest = l;
    } 
    if (r < heapSize && a[r] > a[largest]) {
        largest = r;
    }
    if (largest != i) {
        swap(a, i, largest);
        maxHeapify(a, largest, heapSize);
    }
}

function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));
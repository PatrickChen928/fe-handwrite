// https://leetcode.cn/problems/top-k-frequent-elements/
// 347. 前 K 个高频元素

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  // 利用Map来记录key-整数和value-频率的关系
  let map = new Map()
  nums.map((num) => {
      if (map.has(num)) map.set(num, map.get(num) + 1)
      else map.set(num, 1)
  })
  
  // 如果元素数量小于等于k -> 直接返回字典key-整数
  if(map.size <= k) {
      return [...map.keys()]
  }
  
  // 返回桶排序结果
  return bucketSort(map, k)
};

// 桶排序
let bucketSort = (map, k) => {
  let arr = [], res = []
  map.forEach((value, key) => {
      // 利用映射关系（出现频率作为下标）将数据分配到各个桶中
      if(!arr[value]) {
          // key的数组 -> 有不同整数，相同频率的情况
          arr[value] = [key]
      } else {
          // 相同频率时
          arr[value].push(key)
      }
  })
  // 倒序遍历获取出现频率最大的前k个数且res数组小于k
  for(let i = arr.length - 1; i >= 0 && res.length < k; i--){
      // 若有数据 -> 放入该数组
      if(arr[i]) {
          res.push(...arr[i])
      }
  }
  return res
}

console.log([1,1,1,2,2,3], 2);
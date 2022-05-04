var MaxQueue = function() {
  this.queue = []; // 用一个正常数组存取每次 push 进来的元素
  this.maxQueue = []; // 该队列专门为了简化 max_value 这个 API，称它为单调递减队列
};

/**
* @return {number}
*/
MaxQueue.prototype.max_value = function() {
  return this.maxQueue.length ? this.maxQueue[0] : -1;
};

/** 
* @param {number} value
* @return {void}
*/
MaxQueue.prototype.push_back = function(value) {
  this.queue.push(value); // 正常压入该队列，然后下面维护另一个单调递减队列
  // 队尾开始遍历，遇到值比 value 小的就弹出，维护单调递减队列
  while(this.maxQueue.length && this.maxQueue[this.maxQueue.length - 1] < value) {
      this.maxQueue.pop();
  }
  this.maxQueue.push(value);
};

/**
* @return {number}
*/
MaxQueue.prototype.pop_front = function() {
  if(!this.queue.length) return -1;

  const val = this.queue.shift(); // 该队列由于是正常存放所有压入数组的队列，正常弹出即可
  // 如果弹出的元素正好是单调队列中的队头，那也要弹出，如果弹出的元素不是单调队列头部，那不用管了hh，因为 max_value 的API 只跟队头有关，只要队头元素不要在已经被移出原队列的基础上，还存在单调队列里就行
  if(this.maxQueue[0] === val) {
      this.maxQueue.shift();
  }

  return val;
};

/**
* Your MaxQueue object will be instantiated and called as such:
* var obj = new MaxQueue()
* var param_1 = obj.max_value()
* obj.push_back(value)
* var param_3 = obj.pop_front()
*/
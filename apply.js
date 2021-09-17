/**
 * 1. 绑定this，立即执行
 * 2. 传递参数必须为数组
 */

Function.prototype.apply2 = function(obj, args) {
  if (typeof args != 'undefined' && typeof args != 'object') throw Error('error');
  let self = this;
  obj.fn = self;
  // args 
  args = args instanceof Array ? args : [];
  obj.fn(...args);
}

let obj = {
  a: 1
}

function test() {
  console.log(this); 
  console.log(...arguments); 
}

test.apply2(obj, {a: 1}); // { a: 1, fn: [Function: test] } 
test.apply2(obj, [1,2]); // { a: 1, fn: [Function: test] } 1 2
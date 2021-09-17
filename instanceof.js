function instanceof2(a, b) {
  let pro = b.prototype;
  let _pro = a.__proto__;
  while(true) {
    if (!_pro) return false;
    if (_pro === pro) return true;
    _pro = _pro.__proto__;
  }
}

console.log(instanceof2([], Array)); // true

console.log(instanceof2(1, String)); // false
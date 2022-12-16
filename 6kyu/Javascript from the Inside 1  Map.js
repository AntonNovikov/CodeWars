Array.prototype.map = function(fn, nThis) {
  var newArr = this.slice();
  this.forEach((v, i, arr) => newArr[i] = fn.apply(nThis, [v, i, arr]));
  return newArr;
}
Array.prototype.reduce = function(process, initial = this.shift()) {
  this.forEach( (e) => initial = process(initial, e) );
  return initial;
}

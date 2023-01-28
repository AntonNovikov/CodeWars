/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
 var DI = function (dependency) {
    this.dependency = dependency;
  };
  
  // Should return new function with resolved dependencies
  DI.prototype.inject = function (func) {
  
    var deps = /^[^(]+\(([^)]+)/.exec(func.toString());
    
    deps = deps ? deps[1]
      .split(/\s?,\s?/)
      .map(function (dep) {
        return this.dependency[dep];
      }.bind(this)) : [];
    
    return function () {
      return func.apply(this, deps);
    };
  
  }
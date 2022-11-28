function nouveau(Constructor, ...args) {
  const thisValue = Object.create(Constructor.prototype);
  const result = Constructor.apply(thisValue, args);
  if ((typeof result === 'object' || typeof result === 'function') && result !== null) {
    return result;
  }
  return thisValue;
}

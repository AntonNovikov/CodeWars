const createIterator = (array = []) => {
    var index = 0;
    return {
      next() { 
        const value = array[index++];
        return {value, done: index > array.length};
      },
      get index() {
        return Math.min(index, array.length)
      }
    }
  };
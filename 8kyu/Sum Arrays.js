function sum(numbers) {
  "use strict";
  if (!numbers.length) return 0;
  return numbers.reduce((a, b) => a + b, 0);
}

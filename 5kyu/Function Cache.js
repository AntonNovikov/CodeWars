// https://www.codewars.com/kata/525481903700c1a1ff0000e1

const cache = require('lodash/memoize');

// const _ = require('lodash');
// const cache = func => _.memoize(func, JSON.stringify);


// function cache(func) {
//   var calls = {};
//   return function() {
//     var key = JSON.stringify(arguments);
//     if (!(key in calls)) {
//       calls[key] = func.apply(null, arguments);
//     }
//     return calls[key];
//   };
// }

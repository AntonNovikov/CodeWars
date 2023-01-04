// https://www.codewars.com/kata/53cf7e37e9876c35a60002c9


const R = require('ramda');

function curryPartial(fn, ...xs) {
  return R.curry(fn)(...xs);
}


// function curryPartial(fn, ...args) {
//   if (args.length >= fn.length) {
//     return fn(...args)
//   } else {
//     return (...rest) => curryPartial(fn, ...args, ...rest)
//   }
// }

// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88


const add = n => Object.assign(i => add(i + n), { valueOf: () => n })

// var add = function(n) {
//   const f = x => add(n + x)
//   f.valueOf = () => n
//   return f;
// }

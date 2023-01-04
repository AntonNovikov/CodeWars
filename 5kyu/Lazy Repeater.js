// https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3


makeLooper = (s,i=0) => () => s[i++ % s.length]


// function makeLooper(str) {
//     const funcGenerator = (function*() {
//         while(true)
//             for(let char of str)
//                 yield char;
//     })();
//     return () => funcGenerator.next().value;
// }

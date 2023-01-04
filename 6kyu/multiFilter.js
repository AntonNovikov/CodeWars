// https://www.codewars.com/kata/56a298b27e9e994977000023


const multiFilter = (...funcs) => x => funcs.every(f => f(x));

// https://www.codewars.com/kata/5307ff5b588fe6d7000000a5

const once = (fn, cnt = 0) =>
  (...args) => cnt++ ? undefined : fn(...args);

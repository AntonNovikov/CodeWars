function highAndLow(numbers){
let nums = numbers.split(" ");
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}

function highAndLow(numbers){
  let nums = numbers.split(" ")
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return `${max} ${min}`
  // ...
}

https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

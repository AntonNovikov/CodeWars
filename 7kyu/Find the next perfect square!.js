//https://www.codewars.com/kata/56269eb78ad2e4ced1000013/solutions/javascript
function findNextSquare(sq) {
  let b = Math.sqrt(sq);
  if (Math.sqrt(sq) === Math.ceil(Math.sqrt(sq))) {
    b++;
    return b * b;
  }
  return -1;
}

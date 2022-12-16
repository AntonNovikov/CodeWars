function isPalindrome(x) {
  x = x.toUpperCase();
  for (let i = 0; i <= x.length / 2; i++) {
    if (x[i] != x[x.length - (i + 1)]) return false;
  }
  return true;
}

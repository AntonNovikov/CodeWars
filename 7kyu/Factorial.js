function factorial(n)
{
  // Calculate the factorial here
  if(n<0||n>12){ throw RangeError()}
  if(n==0||n==1)return 1
  return n* factorial(n-1)
}

// function factorial(n) {
//     if (n < 0 || n > 12)
//       throw new RangeError();
//     return n <= 1 ? 1 : n * factorial(n - 1);
//   }
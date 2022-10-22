function findDifference(a, b) {
//   function cub(ar){
//     return ar[0]*ar[1]*ar[2]
//   }
//   return cub(a)-cub(b)
  
  return Math.abs(a.reduce((c,d)=>c*d)-b.reduce((c,d)=>c*d))
}

// https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript

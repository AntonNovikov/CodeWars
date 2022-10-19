function getDivisorsCnt(n){
  const result  = []
    for(let i=0;i<=n;i++){
      if(n%i===0){
       result.push(i) 
      }
    }
  return result.length
}

// function getDivisorsCnt(n) {
//   var div = 0;
//   for(var i = 1; i <= n; i++) if(n % i == 0) div++;
//   return div;
// }

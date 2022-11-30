function solution(start, finish) 
{
  console.log(start,finish)
  let difference = finish - start;
//   if((finish -start)%3===0){
//     return steps+0
//     }
//   if((finish -start)%3===1){
//     return steps+1
//     }
//   if((finish -start)%3===2){
//     return steps+2
//     }
//   if(finish -start===3){
//     return steps+1
//     }
//   if(finish -start===4){
//     return 2
//     }
  return Math.floor((difference)/3) + difference%3;
  //Mew
}

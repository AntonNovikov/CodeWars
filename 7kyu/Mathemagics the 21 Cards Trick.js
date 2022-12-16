function guessTheCard(audience) {
/*
audience has the method getInput(), that receives an array of
3 arrays of 7 cards as parameter and returns the index of the
array where the selected card is present.
This method can be called up to 3 times,
after that it will throw an Error.
*/
//   let arr = Array(21).fill(1).map((el,index) => Array(1).fill(index))
  let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
  let cards = [[],[],[]]
  let count = 0
  const deal = ()=> arr.forEach((el,i) => cards[i%3].push(el))
  const stack = () => {
    let row = audience.getInput(cards)
    row == 0 ? arr = cards[1].concat(cards[0]).concat(cards[2])
    : row == 1 ? arr = cards[0].concat(cards[1]).concat(cards[2])
                : arr = cards[0].concat(cards[2]).concat(cards[1])
    cards = [[],[],[]]
  }
  while( count++< 3){
 deal();
  stack()
    
    }
  return arr[10]
}

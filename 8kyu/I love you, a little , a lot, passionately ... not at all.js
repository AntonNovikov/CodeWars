function howMuchILoveYou(nbPetals) {
    // your code
 // switch(nbPetals%6) {
  console.log(nbPetals)
   console.log(nbPetals%6)
        switch(nbPetals%6) {
    case 1 : 
return "I love you"
    break
    case 2 : return "a little"
    break
    case 3 : return"a lot"
    break
    case 4 :return "passionately"
    break
    case 5 : return"madly"
    break
    case 0 :return "not at all"
   break
}
  
  }


// const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]

// const phrases = [
//     'I love you',
//     'a little',
//     'a lot',
//     'passionately',
//     'madly',
//     'not at all',
// ]

// function howMuchILoveYou(n) {
//      return phrases[(n - 1) % phrases.length] 
// }

// function howMuchILoveYou(nbPetals) {
//   let phrase = {    
//     0: "not at all",
//     1: "I love you",
//     2: "a little",
//     3: "a lot",
//     4: "passionately",
//     5: "madly"
//   }
//   return phrase[nbPetals%6]
// }

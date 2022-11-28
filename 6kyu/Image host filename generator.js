function generateName()
{
  let name = ''
  let characters="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+\\/"
  for (let i=0;i<6;i++){
    name+=characters[~~(characters.length*Math.random())];
  }
  if (!photoManager.nameExists(name)) return name
  return generateName()

}

// Best practices
// function generateName(){
//   function * randomNames() {
//     const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     while (true) {
//       yield Array(6).fill(0).map(ch => alpha[Math.floor(Math.random() * 52)]).join('');
//     }
//   }
//   let name = randomNames().next().value;
//   return photoManager.nameExists(name) ? generateName() : name;
// }

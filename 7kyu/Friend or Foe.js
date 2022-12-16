function friend(friends){
  //your code here
  let friendArr = []
  friends.forEach((el)=> {
    if(el.length===4){friendArr.push(el)} })
  return friendArr
}
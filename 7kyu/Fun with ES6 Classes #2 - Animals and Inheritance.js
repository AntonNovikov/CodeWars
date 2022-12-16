class Shark extends Animal {
  constructor(name,age,status) {
    super(name,age,0,"shark",status);
  }
}

class Cat extends Animal {
    constructor(name,age,status) {
    super(name,age,4,"cat",status);
     
  // Do the same here as you did for Shark - define your constructor function and any other methods you need
} introduce(){return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`}
}

class Dog extends Animal {
  constructor(name,age,status,master) {
   
    super(name,age,4,"dog",status);
     this.master=master;
  // On your own now - you can do it :D
} greetMaster(){return `Hello ${this.master}`}
  }

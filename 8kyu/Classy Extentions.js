class Cat extends Animal {
    constructor(name){
      super()
    this.name = name;
    }
    speak = function(){return this.name + " meows."}
  }
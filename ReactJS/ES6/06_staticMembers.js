// https://javascript.info/static-properties-methods

class User {
    static stFoo() {
        console.log("stFoo() invoked.");
    }

    foo() {
        console.log("foo() invoked.")
    }
    uId;
    uName;
    static uCompany;
};

let usrObj = new User;

usrObj.foo();
// usr.stFoo();    // Error

// User.foo(); // Error
User.stFoo();

usrObj.uId = 1234;
usrObj.uName = "Usr Name";
usrObj.uCompany = "Usr Company";

User.uId = 5678;
User.uName = "User Name";
User.uCompany = "UserCompany";

console.log("usrObj: ", usrObj);
console.log("User: ", User);

User.uId = 9999;    // Adds a new static member uId at the class level
User.uName = "User New Name";    // Adds a new static member uName at the class level
User.uCompany = "CompanyNewName";   // the existing static uCompany is updated at the class level.

usrObj.uCompany = "UsrCompNewName";    // Adds a new uCompany

console.log("usr: ", usrObj);
console.log("User: ", User);

let anotherUserObj = new User;

console.log("anotherUserObj: ", anotherUserObj);
console.log("usrObj: ", usrObj);

// static members are inherited.
class Animal {
    static planet = "Earth";
  
    constructor(name, speed) {
      this.speed = speed;
      this.name = name;
    }
  
    run(speed = 0) {
      this.speed += speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
  
    static compare(animalA, animalB) {
      return animalA.speed - animalB.speed;
    }
  }

 // Inherit from Animal
class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
  }
  
  let rabbits = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 5)
  ];
  
  rabbits.sort(Rabbit.compare);
  
  rabbits[0].run(); // Black Rabbit runs with speed 5.
  
  console.log(Rabbit.planet); // Earth 
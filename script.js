//OOP
//class
// {} --> object has some methods it comes with
const person = {
  name: "Maca",
  bio: () => {
    return `hey this is ${person.name}`;
  },
};
console.log(person);

//10 persons to store??
const multi_person = ({ fn }) => {
  return {
    name: fn,
    // bio: () => {
    //   return `this is ${this.name}`;
    // },
    bio() {
      return `hey this os ${this.name}`; //this refers to the object that is inmediately
    },
  };
};

const personObj = multi_person({ fn: "Maca" });
console.log(personObj.bio());

//class Person {} //not an object yet, we need property and method
class Person {
  #secretKey;

  //constructor method
  constructor(n, ln, secret) {
    this.name = n;
    this.ln = ln;
    this.#secretKey = "234";
  }

  #banking() {
    //use the key to get some amount transfer
    console.log(this.#secretKey);
    return "345";
  }
  // this.name="prem"
  bio() {
    return `hey ${this.name} your balance is ${this.#banking()}`;
  }
}

//const val = Person; //no good, override
//create instance, to keep the blueprint intact we make copies
const val = new Person("prem"); //this is an instance of the class or OBJECT [creating object from a Class]
console.log(val);
console.log(val.bio());

val.ln = "Lopez"; //add property to my object wihout modifying my Class
console.log(val); //print my object

//Encapsulation property: isolation of the property (no need to know to it works using instantiation)
//Abstraction: hidding the complicated details and only show the easy one. Make it private within the class so not other fx or class can access.

//we can have private keys and private methods
console.log(val);
console.log(val.secret);

//Inheritance - classify different objects, we can have some Broad class and inherite from that when needed
class Living {
  constructor(fn, dob) {
    this.fn = fn;
    this.dob = dob;
  }
}

class Human extends Living {
  constructor({ fn, ln, dob }) {
    super(fn, dob);
    this.ln = ln;
  }
  bio() {
    return `
    Hello, this is ${this.fn} and i have a pet called Jonny
    `;
  }
}
const premObj = new Human({ fn: "Prem", ln: "Acharya", dob: "12-12-1221" });

const another = { fn: "Prem", ln: "Acharya", dob: "12-12-1221" };
const premInst = new Human(another);
console.log(another);

class Animal extends Living {
  constructor({ fn, dob, owner }) {
    super(fn, dob);
    this.owner = owner;
  }

  bio() {
    return `
    HI iam ${this.fn} was born in ${this.dob}. MY owner is ${this.owner}
    `;
  }
}

const mrCat = {
  fn: "billy",
  dob: "11111",
  owner: "OJ",
};

const mrCatInst = new Animal(mrCat);
console.log(mrCatInst);

///Challenge
//Q1
class Person2 {
  constructor({ name, age, country }) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  details() {
    return `Name is ${this.name}, age: ${this.age} and Country: ${this.country}`;
  }
}
const person1 = new Person2({
  name: "Carlos",
  age: "45",
  country: "Singapore",
});

const person2 = new Person2({ name: "Robert", age: "23", country: "Iceland" });

console.log(person1);
console.log(person2);

console.log(person1.details());
console.log(person2.details());

//Q2
class Rectangle {
  constructor({ width, height }) {
    this.width = width;
    this.height = height;
  }
  area() {
    const area = Number(this.width) * Number(this.height);
    return `The area is ${area} cms2`;
  }
  perimeter() {
    const perimeter = 2 * (this.width + this.height);
    return `The perimeter is ${perimeter} cms`;
  }
}
const myPrettyRectangle = new Rectangle({ width: "24", height: "12" });
console.log(myPrettyRectangle.area());
console.log(myPrettyRectangle.perimeter());

//Q3
class Vehicle {
  constructor({ brand, model, year }) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  description() {
    return `\tBrand: ${this.brand}
    Model: ${this.model}
    Year: ${this.year}`;
  }
}
class Car extends Vehicle {
  constructor({ nrDoors, brand, model, year }) {
    super({ brand, model, year });
    this.nrDoors = nrDoors;
  }
  description() {
    return `${super.description()}
    Nr of Doors: ${this.nrDoors}`;
  }
}

const vehicle = new Vehicle({ brand: "mazda", model: "cx3", year: "2024" });
console.log(vehicle.description());

const mycar = new Car({
  brand: "nissan",
  model: "pajero",
  year: "2020",
  nrDoors: "5",
});
console.log(mycar.description());

const myNewCar = new Car({ ...vehicle, nrDoors: 5 });
console.log(myNewCar.description());

//Q4
class Shape {
  constructor({}) {}
}
class Circle extends Shape {
  constructor({}) {}
}
class Triangle extends Shape {
  constructor({}) {}
}

//Q5
class BankAccount {
  constructor({ accNumber, holderName, balance }) {
    this.accNumber = accNumber;
    this.holderName = holderName;
    this.balance = balance;
  }
  deposit(amount) {
    if (amount <= 0) {
      console.log(`Incorrect amount`);
      return;
    } else {
      this.balance += amount;
      console.log(`\tDeposit of ${amount} was succesfull.
    New Balance: ${this.balance}`);
    }
  }
  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      console.log(`Incorrect amount`);
      return;
    } else {
      this.balance -= amount;
      console.log(`\tWithdrawal of ${amount} was succesfull.
    New Balance: ${this.balance}`);
    }
  }
  transfer(amount, targetAccount) {
    if (amount <= 0 || amount > this.balance) {
      console.log(`Incorrect amount`);
      return;
    } else {
      this.balance -= amount;
      console.log(`\tThe transfer of ${amount} was succesfull.
    New Balance: ${this.balance}`);

      //other account
      targetAccount.deposit(amount);
    }
  }
}
const myAccount = new BankAccount({
  accNumber: "123",
  holderName: "Macarena Lopez",
  balance: 1000,
});
myAccount.deposit(1000);

const otherAccount = new BankAccount({
  accNumber: "1234",
  holderName: "Suman Roka",
  balance: 10,
});

myAccount.transfer(500, otherAccount);

//Q6

//Q7

//Q8

//Functional Programming
//pure fx
const display = (name) => {
  return `Hello ${name}`;
};

const value3 = display("Maca");
console.log(value3);

//not pure fx
const display2 = (name) => {
  const message = `Hello ${name}`;
  return message;
};

const value2 = display("Maca");
console.log(value2);

//higher fxs
const add = (a, b) => a + b;

const multi = (a, b) => {
  return a * b;
};

const substracting = (a, b) => {
  return a - b;
};

const calculator = (a, b, fn) => {
  return fn(a, b);
};

// const myobj = new calculator(1, 2, add());

//Recursion
// Recursive function to calculate factorial
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // Outputs: 120

//Challenge: create recursive fx

const money = [1, 2, 3];
const total = (arg) => {
  if (arg.length <= 0) return 0;
  return arg.pop() + total(arg); //in the second, arg doesn't have the last element now
  // return arg[arg.length - 1] + total(arg.slice(0, -1));
};
const value5 = total(money);
console.log(value5);

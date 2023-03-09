// Constructor, operator "new"

// main purpose of constructors – to implement reusable object creation code.
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");
console.log(user.name);
console.log(user.isAdmin);

// Return from constructors
// here return overrides this by returning an object:
function  BigUser() {
    this.name = "John";
    return { name: "Godzilla" };
}
console.log( new BigUser().name ); // Godzilla, got that object

function SmallUser() {
    this.name = "John";
    return;
}
console.log( new SmallUser().name ); // John

// Methods in constructor
function User2(name) {
    this.name = name;

    this.sayHi = function() {
        alert("My name is: " + this.name);
    };
}
let newUser1 = new User2("Jhonny");
newUser1.sayHi();

// calculator task
function Calculator(){
    this.read = function(){
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    };

    this.sum = function(){
        return this.a + this.b;
    };

    this.mul = function(){
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum());
alert("Mul="+ calculator.mul());

// Optional Chaining
let user2 = {};
alert( user?.address?.street );  // undefined (no error)
                                 // this code is short and clean and there is no duplication at all
                                 

let user3 = null;

alert( user3?.address ); // undefined
alert( user3?.address.street ); // undefined

// Explicit Function Binding using this
const person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName:"Cristiano",
    lastName:"Ronaldo",
}

console.log(person1.fullName.call(person2)); // here this refers person2 
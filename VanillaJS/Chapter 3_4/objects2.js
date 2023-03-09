// Object methods, "this"

let user = {
    name: "John",
    age: 30
};

user.sayHi = function () {
    console.log("Hi!");
};

user.sayHi();

// we could use a pre-declared function as a method
function sayHello() {
    console.log("Hello!");
}

user.sayHello = sayHello;   // then add as a method

user.sayHello();

// "this" in methods
let user2 = {
    name: "Eminem",
    age: 40,

    sayRap() {
        console.log(this.name);
    }
};
user2.sayRap(); // Eminem

// "this" is not bound
let user3 = { name: "Elizabeth" };
let admin = { name: "Admin" };

function sayAssemble() {
    console.log(this.name);
}

user3.f = sayAssemble;  // use same function in two objects
admin.f = sayAssemble;
user3.f();  // Elizabeth (this == user3)
admin.f();  // Admin (this == admin)

// Arrow functions have no "this"
let user4 = {
    firstName: "Ilya",
    sayBye() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};
user4.sayBye(); // Ilya

// create a calculator
let calculator = {
    
    read(){
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },

    sum(){
        return this.a + this.b;
    },

    mul(){
        return this.a * this.b;
    }

};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// chaining exercise
// let ladder = {
//     setp: 0,
//     up() {
//         this.setp++;
//     },
//     down() {
//         this.setp--;
//     },
//     showStep() {
//         console.log("Current step: ", this.setp);
//     }
// }
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log("Current step: ", this.step);
        return this;
    }
}

ladder
    .up()
    .up()
    .down()
    .showStep()
    .down()
    .showStep();
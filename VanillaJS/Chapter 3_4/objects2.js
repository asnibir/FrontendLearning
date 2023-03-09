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

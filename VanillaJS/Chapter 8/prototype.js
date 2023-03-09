let person = {};
person.name = 'Jasim';
person.age = 30;

person.eat = function() {
    console.log('Person is eating');
};
person.sleep = function() {
    console.log('Person is sleeping');
};
person.eat();
person.sleep();


// function Person(name, age) {
//     let person = {};

//     person.name = name;
//     person.age = age;

//     person.eat = function() {
//         console.log('Person is eating');
//     }

//     person.sleep = function() {
//         console.log('Person is sleeping');
//     }
//     return person;
// }

// const sakib = Person('Sakib', 35);
// const tamim = Person('Tamim', 36);


// const personMethods = {
//     eat() {
//         console.log('Person is eating');
//     },
//     sleep(){
//         console.log('Person is sleeping');
//     },
//     play(){
//         console.log('Person is playing');
//     },
// };

// function Person(name, age) {
//     let person = {};

//     person.name = name;
//     person.age = age;

//     person.eat = personMethods.eat;
//     person.sleep = personMethods.sleep;
//     person.play = personMethods.play;

//     return person;
// }

// const sakib = Person('Sakib', 35);
// const tamim = Person('Tamim', 36);



// const captain = {
//     name: 'Mashrafi',
//     age: 36,
//     country: 'Bangladesh'
// };

// const player = Object.create(captain);  // parent of player is captain
// console.log(player);
// console.log(player.name);

// const personMethods = {
//     eat() {
//         console.log('Person is eating');
//     },
//     sleep(){
//         console.log('Person is sleeping');
//     },
//     play(){
//         console.log('Person is playing');
//     },
// };

// function Person(name, age) {
//     let person = Object.create(personMethods);

//     person.name = name;
//     person.age = age;

//     return person;
// }

// const sakib = Person('Sakib', 35);
// sakib.play();
// const tamim = Person('Tamim', 36);
// tamim.sleep();


/*************Prototypes************/
function test() {}

console.dir(test);
console.log(test.prototype);

function Person(name, age) {
    let person = Object.create(Person.prototype);
    person.name = name;
    person.age = age;

    return person;
}

Person.prototype = {
    eat() {
        console.log('Person is eating');
    },
    sleep() {
        console.log('Person is sleeping');
    },
    play() {
        console.log('Person is playing');
    },
};
const sakib = Person('Sakib', 35);
sakib.play();
const tamim = Person('Tamim', 36);
tamim.sleep();



function PersonWithNew(name, age) {
    this.name = name;
    this.age = age;
}

PersonWithNew.prototype = {
    eat(){
        console.log('Person is eating.');
    },
    sleep(){
        console.log('Person is sleeping.');
    },
    play(){
        console.log('Person is playing.');
    },
};
const taskin = new PersonWithNew("Taskin", 25);
taskin.play();


// class format
class PersonClass {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log("Person is eating!!!");
    }
    play(){
        console.log("Person is playing!!!");
    }
    sleep(){
        console.log("Person is sleeping!!!");
    }
}

const liton = new PersonClass("Liton", 29);
liton.sleep(); 


let persons = new Array();
persons.push("Sakib");
console.log(persons);
console.log(Array.prototype);
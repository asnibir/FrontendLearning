"use strict";

// this code works the modern way

console.log("OK!");

let message, command;
const COLOR_RED = "#F00";

message = 'Hello Coders!';
alert(message);
console.log(message);

const birthday = '23.05.1998';

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

let name = "Nibir";
// embed a variable
console.log(`Hello, ${name}!`);
//embed an expression
console.log(`the result is ${1 + 2}`);

let isGreater = 4 > 1;
console.log(isGreater);
console.log(typeof(isGreater));

let age = prompt('How old are you?', 100);
console.log(`You are ${age} years old!`);

let isBoss = confirm("Are you the boss?");
alert(isBoss);  // true if OK is pressed

let name2 = prompt('What is your name?');
console.log(`My name is ${name2}.`); 

// String Conversion
let value = true;
console.log(typeof(value));

value = String(value);
console.log(typeof(value));

let counter = 1;
let a = ++counter;
console.log(a);

let counter2 = 1;
let b = counter2++;
console.log(b);
console.log("2" > "12");
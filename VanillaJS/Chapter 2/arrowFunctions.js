let sum = (a, b) => a + b;
alert(sum(5, 6));

let double = n => n*2;
alert(double(5));

let sayHi = () => alert("Hello!");
sayHi();

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ? 
    () => alert('You are under 18!') :
    () => alert("You are a man!");

welcome();

// Multiline arrow functions
let _3sum = (a, b, c) => {
    let result = a + b + c;
    return result;
};
alert(_3sum(1, 2, 3));

let ask = (question, yes, no) => confirm(question) ? yes() : no();

ask("Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);
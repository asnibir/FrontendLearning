// Conditional Branching

// let result = condition ? value1 : value2;
let age = 15;
let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed);

// Multiple ?
age = prompt('age?', 18);
let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';

alert(message);

let number = prompt('Give a number.', 0);
let msg = (number > 0) ? 1 :
    (number < 0) ? -1 :
        0;
alert(msg);

alert(alert(1) || 2 || alert(3)); // The call to alert does not return a value. Or, in other words, it returns undefined.

// Labels for break/continue
outer:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i}, ${j})`, '');
        // if an empty string or canceled, then break out of both loops
        if (!input) break outer;
    }
}
alert('Done!');

// generate prime

let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue nextPrime;
        }
    }
    alert(i);
}
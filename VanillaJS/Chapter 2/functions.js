function showMessage(from, text){
    if(text == undefined){
        text = 'no text given';
    }
    alert( from + ": " + text);
}

showMessage("Hello", " Coders!");

function showCount(count){
    // if count is undefined or null, show "unknown"
    alert(count ?? "unknown");
}
showCount(0);
showCount(null);
showCount();

function showPrime(n){
    for(let i=2; i<=n; i++){
        if(!isPrime(i)) continue;

        console.log(i);   // prime
    }
}

function isPrime(n){
    for(let i=2; i<n; i++){
        if(n%i == 0) return false;
    }
    return true;
}
showPrime(7);

function checkAge(age){
    return (age > 18) || confirm('Did parents allow you?');
}

///////////////////////////////////////////////////////////
// Function Expression
let sayHi = function(){
    alert("Hello");
};
// Function is a value
function sayHii(){
    alert("Hola!");
}
alert(sayHii);

function sayHola(){
    alert("HOLA!");
}

let func = sayHola;     // copy the function
func();
sayHola();

/////////////////////////////////////////////////////////
// Callback functions
// The arguments showOk and showCancel of ask are called 
// callback functions or just callbacks.
function ask(question, yes, no){
    if(confirm(question)){
        yes();
    }
    else no();
}
function showOk(){
    alert("You agreed.");
}
function showCancel(){
    alert("You canceled the execution.");
}
ask("Do you agree?", showOk, showCancel);


function ask2(question){
    if(confirm(question)){
        showOk();
    }
    else showCancel();
}
ask2("Do you agree?");



let age = prompt("What is your age?", 18);
let welcome;

if(age<18){
    welcome = function(){
        alert("You are under 18!");
    };
}
else{
    welcome = function(){
        alert("You are a man!");
    };
}
welcome();

let batteryCharge = prompt("What is your battery charge?", 100);
let batteryStatus = (batteryCharge < 50) ? 
                    function(){alert("Recharge your battery!");} :
                    function(){alert("Your battery is OK!"); };
batteryStatus();
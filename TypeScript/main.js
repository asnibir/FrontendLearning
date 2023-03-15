function doSomething() {
    let i = 0;
    for (; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
let count = 5;
// count = 'a';
let a; // any type
a = 1;
a = true;
a = 'a';
let b;
let c;
let d;
let e;
let f = [1, 2, 3];
let g = [1, true, 'a', false];
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 0] = "Red";
    Colour[Colour["Green"] = 1] = "Green";
    Colour[Colour["Blue"] = 2] = "Blue";
})(Colour || (Colour = {}));
; // all the related constant in a container
let backgroundColor = Colour.Red;
// Type Assertions
let message = 'abc'; // string
let endsWithC = message.endsWith('c');
let message2; // any type
message2 = 'abc';
let typeAss = message2.endsWith('c');
let typeAss2 = message2.endsWith('c');

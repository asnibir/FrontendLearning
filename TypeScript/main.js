function doSomething() {
    var i = 0;
    for (; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
var count = 5;
// count = 'a';
var a; // any type
a = 1;
a = true;
a = 'a';
var b;
var c;
var d;
var e;
var f = [1, 2, 3];
var g = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 0] = "Red";
    Colour[Colour["Green"] = 1] = "Green";
    Colour[Colour["Blue"] = 2] = "Blue";
})(Colour || (Colour = {}));
; // all the related constant in a container
var backgroundColor = Colour.Red;

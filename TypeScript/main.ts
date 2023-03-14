function doSomething(){
    let i = 0;
    for( ; i<5; i++){
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

let b: number;
let c: boolean;
let d: string;
let e: any;
let f: number[] = [1, 2, 3];
let g: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Colour { Red=0, Green=1, Blue=2};    // all the related constant in a container
let backgroundColor = Colour.Red;

// Type Assertions
let message = 'abc';    // string
let endsWithC = message.endsWith('c');

let message2;   // any type
message2 = 'abc';
let typeAss = (<string>message2).endsWith('c');
let typeAss2 = (message2 as string).endsWith('c');
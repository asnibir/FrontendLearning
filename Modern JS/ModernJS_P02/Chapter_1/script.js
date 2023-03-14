// function sayHi(){
//     console.log('What is going on?');
// }

// window.sayHi();

// alert(window.innerHeight);

// // DOM
// document.body.style.background = "cyan";
// setTimeout(() => document.body.style.background = "", 3000);

// // BOM (Browser Object Model)
// alert(navigator.userAgent);
// alert(navigator.platform);
// alert(location.href);
// if(confirm("Go to Youtube?")){
//     location.href = "https://youtube.com";
// }

for (let i=0; i<document.body.childNodes.length; i++){
    console.log(document.body.childNodes[i]);
}

for (let node of document.body.childNodes) {
    console.log(node);
}

alert(Array.from(document.body.childNodes).filter);

console.log(document.body.parentNode == document.documentElement);  // true
console.log(document.head.nextSibling);
console.log(document.body.previousSibling);

console.log(document.documentElement.parentNode);   // document
console.log(document.documentElement.parentElement); // null

for( let elem of document.body.children) {
    console.log(elem);  // only elements
}

let table = document.body.firstElementChild;

for (let i=0; i<table.rows.length; i++){
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}
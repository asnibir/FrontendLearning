console.dir(document);
console.log(typeof (document));
console.log(document.title);
console.dir(document.head);
document.title = 'Play With DOM';
console.log(document.all);

for (let element of document.all) {
    console.log(element);
}
console.log(document.images);
console.log(document.forms);


// Lesson - 03
// GET ELEMENT BY ID
console.log(document.getElementById('new-task'));
let headerElement = document.getElementById('header');
headerElement.textContent = 'To-Do Apps';
headerElement.innerText = 'To-Do App';

console.log(headerElement.textContent);
console.log(headerElement.innerText);
console.log(headerElement.innerHTML);

console.dir(headerElement); // object
headerElement.style.color = 'red';

// GET ELEMENTS BY CLASSNAME
//console.log(document.getElementsByClassName('item'));
let items = document.getElementsByClassName('item');
for (let i = 0; i < items.length; i++) {
    items[i].style.color = 'red'; // all with className item will be red from black
}

let itemUL = document.getElementById('items');
let items2 = itemUL.getElementsByClassName('item');
for (let i = 0; i < items2.length; i++) {
    items2[i].style.color = 'blue'; // only className item of id items will be blue from red
}

// GET ELEMENTS BY tagname
let items3 = document.getElementsByTagName('li');
console.log(items3);

// Query Selector
let newTask = document.querySelector('#new-task');
console.log(newTask);

let lastItem = document.querySelector('.item:last-child');
lastItem.style.color = 'green';

let lastItems = document.querySelectorAll('.item:last-child');
console.log(lastItems);
for (let element of lastItems) {
    element.style.color = 'green';
}

let nthItem = document.querySelector('.item:nth-child(2)');
nthItem.style.color = 'orange';

// let nthItem2 = document.querySelector('#items').querySelector('.item:nth-child(2)');
// nthItem2.style.color = 'orange';



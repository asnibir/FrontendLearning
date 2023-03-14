const parent = document.querySelector('#items');
const children = parent.children;

console.log(children);

const grandparent = document.querySelector('.todo-list');
const parent2 = grandparent.children;   // array dibe jar 2 ta children
const children2 = parent2[1].children;
console.log(children2);

const grandparent2 = document.querySelector('.todo-list');
const children3 = grandparent2.querySelectorAll('.item');
console.log(children3);

// from children to parent
const children4 = document.querySelector('.item');
const parent4 = children4.parentElement;
console.log(parent4);

const grandparent3 = children4.closest('.todo-list');
console.log(grandparent3);

// siblings
const bro1 = document.querySelector('.item');
const bro2 = bro1.nextElementSibling;   // also previousElementSibling
console.log(bro2);
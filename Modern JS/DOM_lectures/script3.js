// Lesson - 5

// creating an element dynamically
const divElement = document.createElement('div');
console.dir(divElement);
divElement.className = 'red';
divElement.setAttribute('id', 'red');
divElement.setAttribute('title', 'Red Div');

const container = document.querySelector('.todo-list');
// const h2Element = container.querySelector('h2');
// container.insertBefore(divElement, h2Element);  // add before h2

// container.appendChild(divElement);
// container.append('Hello World');

const a = container.appendChild(divElement);
console.log(a);
const b = container.append(divElement);
console.log(b);

container.append(divElement, document.createElement('p'), 'Hello World');
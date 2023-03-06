// Tutorial 7
const headerElement = document.querySelector('#header');

headerElement.addEventListener('click', (event) => {
    console.log(event);
});

headerElement.addEventListener('dblclick', (event) => {
    console.log("Double Clicked!");
});

const inputElement = document.querySelector('input[type="text"]');

inputElement.addEventListener('focus', (event) => {
    console.log(event);
});

const formElement = document.querySelector('form');

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target);  // on which element event is fired
    // event.target.value;
});
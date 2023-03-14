let elem = document.getElementById('elem');
elem.style.background = 'red';

let elements = document.querySelectorAll('ul > li:last-child');
for(let elem of elements){
    console.log(elem.innerHTML);
}

let inputs = table.getElementsByTagName('input');

for(let input of inputs){
    console.log(input.value + ': ' + input.checked);
}

document.body.sayTagName = function() {
    alert(this.tagName);
};
document.body.sayTagName();

Element.prototype.sayHi = function() {
    alert(`Hello, I'm ${this.tagName}`);
};
document.documentElement.sayHi();
document.body.sayHi();

alert(elem.getAttribute('About'));  // reading
elem.setAttribute('Test', 123); // writing
alert(elem.outerHTML);

for(let attr of elem.attributes){
    alert(`${attr.name} = ${attr.value}`);
}

let links = document.querySelectorAll('a');

for( let link of links){
    let href = link.getAttribute('href');
    if(!href) continue;
    if(!href.includes('://')) continue;
    if(href.startsWith('http://internal.com')) continue;

    link.style.color = 'orange';
}
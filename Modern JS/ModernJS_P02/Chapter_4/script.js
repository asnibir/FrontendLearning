// let form = document.forms.my;

// let elem1 = form.elements.one;
// let elem2 = form.elements.two;
// console.log(elem1.value);
// console.log(elem2.value);

alert(form.elements.login);
let fieldset = form.elements.userFields;
alert(fieldset);

alert(fieldset.elements.login == form.elements.login);

console.log(form.elements.login == form.login); // true
form.login.name = "username" //change the name of input

// form.elements update the name
console.log(form.elements.login);   // undefinded
console.log(form.elements.username); // input

// form allows both names: the new one and the old one
console.log(form.login == form.username);

// all three do the same thing
select.options[2].selected = true;
select.selectedIndex = 2;
select.value = 'banana';
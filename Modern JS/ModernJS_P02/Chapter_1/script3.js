// Modifying the document

// creating an element
let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<b>Hello Coders!</b>";

// insertion methods
document.body.append(div);

ol.before('before');
ol.after('after');

let liFirst = document.createElement('li');
liFirst.innerHTML = '-1';
ol.prepend(liFirst);

let liLast = document.createElement('li');
liLast.innerHTML = '3';
ol.append(liLast);

function getListContent() {
    let fragment = new DocumentFragment();

    for(let i=1; i<=3; i++){
        let li = document.createElement('li');
        li.append(i);
        fragment.append(li);
    }
    return fragment;
}

ul.append(getListContent());

function getListContent2(){
    let result = [];

    for(let i=1; i<=3; i++){
        let li = document.createElement('li');
        li.append(i*2);
        result.push(li);
    }
    return result;
}
ul.append(...getListContent2());
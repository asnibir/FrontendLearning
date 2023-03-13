function countRabbits(){
    for(let i=1; i<=3; i++){
        alert("Rabbit number " + i);
    }
}
elem.onclick = countRabbits;    // but in the markup we do need the parentheses.

function handler1(){
    alert('Thanks!');
}

function handler2() {
    alert('Thanks again!');
}
elem1.onclick = () => alert('Hello');
elem1.addEventListener("click", handler1);
elem1.addEventListener("click", handler2);

elem2.onclick = function(event){
    alert(event.type + " at " + event.currentTarget);
    alert("Coordinates: " + event.clientX + ":" + event.clientY);
};

let obj = {
  handleEvent(event) {
    alert(event.type + " AT " + event.currentTarget);
  }  
};
elem2.addEventListener('click', obj);
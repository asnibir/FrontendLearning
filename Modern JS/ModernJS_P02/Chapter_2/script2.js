// Bubbling and capturing
form.onclick = function(event) {
    event.target.style.backgroundColor = 'yellow';
  
    // chrome needs some time to paint yellow
    setTimeout(() => {
      alert("target = " + event.target.tagName + ", this=" + this.tagName);
      event.target.style.backgroundColor = ''
    }, 1000);
  };

// stopping bubbling 
// event.stopPropagation()\
// Don't stop bubbling without a need!
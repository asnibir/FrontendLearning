// Focusing: focus/blur
input.onblur = function(){
    if(!input.value.includes('@')){
        input.classList.add('invalid');
        error.innerHTML = 'Please enter a correct email.';
    }
};

input.onfocus = function(){
    if(this.classList.contains('invalid')) {
        // remove the "error" indication, because the user wants to re-enter something
        this.classList.remove('invalid');
        error.innerHTML = "";
    }
};
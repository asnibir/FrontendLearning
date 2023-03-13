async function f() {
    return 1;   // return a promise
}

f().then(alert);

async function fun(){
    try{
        let response = await fetch('/no-user-here');
        let user = await response.json();
    } catch(err) {
        alert(err);
    }
}
fun();
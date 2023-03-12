
let promise = new Promise(function(resolve, reject){
    // the function is executed automatically when the promise is constructed
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
    // setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise.then(
    result => console.log(result),
    error => console.log(error)
);

let promise2 = new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000);

});

promise2.then(function(result){

    console.log(result);
    return result * 2;

}).then(function(result){

    console.log(result);
    return result*2;

}).then(function(result){

    console.log(result);
    return result*2;

});

new Promise(function(resolve, reject){
    
    setTimeout(() => resolve(1), 1000);

}).then(function(result) {

    console.log(result);    //1
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
    });

}).then(function(result) {

    console.log(result);    //2
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(result*2), 1000);
    });

}).then(function(result) {

    console.log(result);

    });
// Synchronous
console.log(1);
console.log(2);
console.log(3);


// Asynchronous 

setTimeout(function () {
    console.log(5);
}, 1000);

setInterval(function () {
console.log("1 secconds have passed.")
}, 1000);

//var runsForevever = setInterval(function () {
//    console.log("3 sconds have passed.")
// }, 3000);

//clearInterval(runForever); this will stop the interval.

console.log(6);

//Closures

var myGlobalVariable = 100;

function someFunction() {
    var myLocalVariable = 10;

    console.log(myLocalVariable);

    console.log(myGlobalVariable);
};

someFunction();    

console.log(myGlobalVariable);

//console.log(myLocalVariable); Cannot access locate varible becasue it is in a child scope.


// If statement does not have scopes.
if (true) {
    // Code to run
}

if(false) {
    // Code to run
}



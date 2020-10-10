// Takes the texts in the quotes and sends it off to the javascript Console.
console.log("Hello World");
console.log("How are you doing?");

// This is a single line comment

/*
multi-line comment
*/

//DATATYPES
//String (this will get treated like text)
" This is a really long sentence";
"to use single quotes ' and ' in the string, use double quotes on the inside";
'To use double quotes " and " in the string, use single quotes on the outside.';

"100";
console.log(1000);
console.log(true);
console.log("Hey there");

// The computer will break on the seccond string.

"''''''''''";

'"""""""""""';


//Number (this will get treated as a number)
100;
10.9;
.70009;

//Boolean (switch usually true or false)
true;
false;


// VARIABLE
var myBox;

// Name Shcems
//camel case:capitalize every word after the first word.
//Example: originalLocation
// Snake Case: every space is replaced by an underscore, no capital letters.
//Example: original_location

myBox = "kitchen utensils";


var seccondVariable = "bathroom supplies";

console.log(myBox);

//Mathimatical Operations
// +, -, /, *, %

var sum = 2 + 4;
var difference = 2 - 4;
var quotient = 2 / 4;
var product = 2 * 4;
var remainder = 2 % 4;

console.log("the Quotient of 2 and 4 is");
console.log(remainder);

//logical operator

var isItRaining = true;

isItRaining == true; //true

var someNumber = 100;

someNumber == 50; //false

someNumber >= 50; //true

someNumber < 50; //false

"hello" == "hello"; //true
"goodbye" == "hello"; //false
"Hello" == "hello";  //false
"hello" == "hello"; //false

true == true; //true
true == false; //false
false == false; //true

sum > product; //false


var personAge = 45;

//If Statement
//If    this is true       then run this
//If        ()                  {}

if (false) {
    console.log("Nice Day!");
    console.log("Hello there!");

}

if (personAge >= 21) {
    console.log("congrates you can drink!");
} else {
    console.log("Sorry, you are to young to drink!");
}

console.log("We march on!");


// Function 
// keyword      name of fuction     code block
// fuction      myFunction()           {}

function myFirstFunction() {
    console.log("Have a nice day!");
    console.log("Today will be sunny");
    console.log("Today will be dry");

    if (raining) {
        console.log("Bring an umbrella");
    }
    var raining = true;
}

myFirstFunction();
myFirstFunction();
myFirstFunction();


nonExistingVariable;


// Practice creating the following
/*

Variables
Datatypes
If Statements
Logical Comparison

*/
var myVar = 100;

myVar = 200;

myVar = 100;

var weekdays = ["monday", "tuesday", "wensday", "thursday", "friday", "saturday", "sunday"];


var months = [
    "january"
    ];

var mixedArray = [100, "hello there", true];

console.log(weekdays[0]);

console.log(mixedArray[4]);

console.log(mixedArray);

mixedArray[1] = "Hello there!"

console.log(mixedArray);

mixedArray[3] = 1005;

console.log(mixedArray);

mixedArray[1] = null;
// "null" is used to say its empty and hold its space for future refrence and "undefined"means that somethng is wrong
console.log(mixedArray);

var emptyArray = [];

// Array Methods

//Array push-- this will add items to the array
emptyArray.push("this is the firts item!");

console.log(emptyArray);

emptyArray.push(10000);

emptyArray.push(false);

console.log(emptyArray);

//Array Pop-- this will remove the last element of the array

emptyArray.pop();

console.log(emptyArray);

emptyArray.pop();
emptyArray.pop();

console.log(emptyArray);

//Array Unshift--it added to the begining of the array

weekdays.unshift("superday");

console.log(weekdays);

// Array Shift-- removing the start of the array

weekdays.shift();

console.log(weekdays);



//Array ForEach

/*listOfIteamsArray.forEach(function (eachItem) {
    use eachItem how ever you want.
})
*/

weekdays.forEach( function (weekday) {
    console.log  (weekdays);
} );


// Loops and Arrays.

var setOfNumbers = [1, 10, 100, 1000, 10000, 400, 399, 119, 39, 20, 300, 1993, 3920, 39];

//console.log(setOfNumbers[0] * 6);
//console.log(setOfNumbers[1] * 6);
//console.log(setOfNumbers[2] * 6);

for (var i = 0; i < setOfNumbers.length; i = i +1) {
    var product = setOfNumbers[i] * 6;
    console.log(product);
}



//Array within ArrayAKA mulitidementional array.


var masterArray = [
    [10, 29],
    [14, 20],
    [50, 12]
]


masterArray[1][0]
masterArray [1].lenght;
masterArray[2][0];//this will grab the number 50 from the third array inside of this array.


"use strict";
(function(){


//Function - a reuseable block of code that perfroms a specified task,
//usually taking an input and producing an output.

//functions we've been exposed to
//console.log()
//prompt()
//alert()
//confirm()
//.startsWith()
//.endsWith()
//Number() -constructor

// someFunction(arguements)
// each function can take a number of arguements.
//Arguments are optional
// prompt("What did you have for lunch?")

//storing the return value to our prompt to our variable named littleMermaid
//example
let littleMermaid = prompt("How many days did you rent the Little Mermaid?");
//storing the return value of parseInt in our variable named littleMeramidDays.
let littleMermaidDays= parseInt(littleMermaid);

//EXCECUTING FUNCTIONS - DEFINITION VS EXCECUTION

//any time we call a function without () it will just output the defition of the function
console.log(parseInt)
//perfomring the function when using ().
console.log(parseInt("11"));

//Defining Functions
//Arguements are values we pass to a function when excecuting.
//Parameters are placeholders for our function defintion.


function add(num, num2) {
    //return the output of num + num2
    return num + num2;
    console.log("Finished the function execution!")
    return num - num2
}
console.log(add(5, 5));

let ten = add(3,7);

console.log(ten);

//Arrow function expression
const addition = (num, num2) => {
    return num + num2;
}

// or

//addition = (num, num2) => num + num2

// or type log and press tab
console.log(addition(6,4));
console.log(add(add(5,6), add(10,7)));
//Executing a function with function arguments.



//return gives a value and stores value in memory


//anonymous functions
let increment = function (number){
    return number +1;
};

let two = increment (3);
console.log(two);

function shout(message){
    alert(message.toUpperCase()+ "!!!")
}
//shout("codeup");
//console.log(shout("codeup"))
function returnFive(){
    //return number == 5 can replace function to be more versatile with inputs.
    return 5;

    console.log(returnFive());
    console.log(returnFive(10)); //still returns 5.
}

function isFive(number){
    return number
};
console.log(isFive(5));
console.log(isFive(5) === (5));

//const isShortWord = (string) => string.length < 5;


function isShortWord(string){
 return string.length <5
};
console.log(isShortWord("hello world"));


function isSameLength(string1, string2) {
//let isSameLength("string1", "sting2");
   // let "string1"
    //= "bike";
  //  let "string2"
   // +"bird"

//    console.log(isSameLength)("bike", "bird").length ===;
//    console.log === isSameLength("string1", "string2");

return string1.length === string2.length;}









//function isOdd(number)
//isOdd(number)=/3;

//function isEven(number);




let globalVariable = "Hello, I'm Global!";

function test(){
    let localVar = "Hello, I'm local!"
    console.log(globalVar);
}
console.log(localVar);

// this would not show local as it is defined
// in the function betweeen the brackets. however if we console.logged
// the local in the bracket it would appear. This is because it is outside function.
//within the curly brackets means it is blocked scoped.



let x = 300;
let y = 100;

function scopeExample(){
    let x = 1;
    let y = 2;
    console.log("x: " + x + " y: " + y); // x: 1 y:2
    return x + y;

    console.log ("x: " + " y " + y); // x: 300 y: 100
let returnValue = scopeExample();
console.log(returnValue); //3

}());
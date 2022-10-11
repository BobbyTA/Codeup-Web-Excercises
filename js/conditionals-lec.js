"use strict";
(function() {
    //if statement allows you to execute code
    //based on certian condions

    //if (condition){
    //if the condition is met, the code in the curly
    //braces will be executed.
    //}

    //if statement conditions will ALWAYS evaluate a boolean.

    if (typeof "icon" === "boolean") {
        console.log("Run this code!");
    }

    if ("") {
        console.log("Run this code!");
    }


    //IF / ELSE STATEMENT - in addition to the IF
    //statement, the ELSE will block will run if
    //if the condition is not met.

    if (typeof true === false) {
        //condition evaluated to true, run this code
        console.log("The condition evauates to true");
    } else {
        //condition evaluates to fasle, run this code
        console.log("The condition evaluates to false!");
    }

    let currentShow = prompt("What show are you currently watching?");

    if (currentShow.toUpperCase() === "HOUSE OF DRAGONS" || currentShow.toLowerCase() ===
        "rick and morty" || currentShow.toUpperCase() === "POKEMON") {
        console.log("Whoa! I love that show!")
    } else {
        console.log("Hey I haven't seen that show yet, I'll have to give it a try!")
    }


    let password = "secret"
    let username = "bta"

    let userUsernname = prompt("please enter your username.")
    let userPassword = prompt("please enter your password");

    if (username === userUsernname && password === userPassword) {
        console.log("You've successfully logged in")
    } else {
        console.log("Invalid login, please try again.")
    }
    //prompt("what is your username and password");
    //if (userUsernname === "BTA" ,
    //    userPassword === "secret") {
    //    console.log("success")
    //}else{
    //    console.log("error")
    //}


    //Example:
    //username = "bta"
    //password = "secret"

    //IF/ELSE IF/ELSE
    // if(condition) {
    //if condition evaluates to true, run this code.
    //} else if(condition2){
    //if the second condition is met, run this code.
    //else{
    //if no condition is met, run this code.
    //}


    //teacher is dismissing students by clothing\
    let shoes = "red"
    let shirt = "green"
    let jeans = "demin"
    let jacket = true;

 //   if (shoes === "red") {
  //      console.log("if you are wearing red shoes you are dismissed.")
   //     {
   //     }
   // }else
   //     if (shirt === "green") {
   //         console.log('If you are wearing a green shirt you are dismissed.');
   //     } else if()
   //         }


    //if(num % 5 ===0){
    //console.log("The number
    // is divisible 5,2 and is an even number");
    //}else if(num % 2 === 0){
    //console.log("The number is even and divisible by 2");
    //}else if (num % 2 === 0 && num % 5 === 0) {
    //console.log("The number is divisible by 5.")
    //}else{
    //console.log("the number is odd and not divisible by 5.")
    //}

//TERNARY OPERATOR / STATEMENT


    //If myName is equal to "Codeup", assign the value "Hello, " + myName, if myName is not equal, assign the greeting
    // variable "Hello, stranger!"
    let greeting =(myName === "codeup") ? "Hello, " + myName : "Hello Stranger:";

    console.log(greeting);

    let myName = "codeup";
    myName === "codeup" ? console.log("Hello, " + myName) :
        console.log("Hello Stranger!")
}



//currentShow1.toLowerCase() === "house of dragons" ? "Lame!" : "I dont like that show.";



//SWITCH STATEMENTS

//let menu = prompt("Please choose an item:\n1.cheeseburger\n2.chicken sandwich\n3.chili cheese fries\n4.philly cheesesteak");
//switch(menu) {
//    case "1":
//        alert("The cheeseburger costs: $5.99")
//        break;
//    case "2":
//        alert("The chicken sandwich comes with pickles and is $4.99");
//        break;
//    case "3":
//        alert("The chili cheese fries are $2.99")
//       break;
//    case "4":
//        alert("The philly cheesesteak has mushrooms and is $7.99");
//        break;
//    default:
//        alert("Sorry, that item is not on the menu!")
//}

//if(menu ==="1"){
//    alert("the cheeseburger cost: $5.99")
//}else if(menu === "2")

let input ="Gimme a beat!"

if(typeof input === "string") {
    if (input.length > 6) {
        console.log("Boots and cats")
    } else {
        console.log("That string ain't ready for the flow.")
    }
}else {
    console.log("You gave me something else, I said gimme a beat!")
}

let hungry = confirm("Are you hungry")
if(hungry){
    let menu = prompt("Please choose an item:\n1.cheeseburger\n2.chicken sandwich\n3.chili cheese fries\n4.philly cheesesteak");
    switch(menu) {
        case "1":
            alert("The cheeseburger costs: $5.99")
            break;
        case "2":
            alert("The chicken sandwich comes with pickles and is $4.99");
            break;
        case "3":
            alert("The chili cheese fries are $2.99")
            break;
        case "4":
            alert("The philly cheesesteak has mushrooms and is $7.99");
            break;
        default:
            alert("Sorry, that item is not on the menu!")
    }







})();
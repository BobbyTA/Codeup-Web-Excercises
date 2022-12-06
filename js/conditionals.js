"use strict";
(function () {
    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message which relates to the
     * color stated in the argument of the function. For colors you do not have
     * responses written for, return a string stating so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     * You should use an if-else-if-else block to return different messages.
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */



// let analyzeColor = prompt("what is your favorite color?")
// if (analyzeColor === red) {
//     console.log("Firetrucks are red")
// } else if (analyzeColor === blue) {
//     console.log("The color of the ocean")
// } else if (analyzeColor === cyan) {
//     console.log(" I dont know anything about cyan")
// } else if (analyzeColor === random){
//     console.log(" randomColor")
// }
// ;
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var luckyNumber = Math.floor(Math.random() * 6);


    // function analyzeColor(color) {
    //     let userColor = prompt("what is your favorite color?")
    //     if (color === "red") {
    //         return ("Firetrucks are red.");
    //     } else if (color === "blue") {
    //         return ("The color of the ocean.");
    //     } else if (color === "cyan") {
    //         return ("I dont know anything about cyan.");
    //     } else {
    //         return "I don't know that color"
    //         }
    //
    // };
    //
    // //(analyzeColor(randomColor));
    // console.log(analyzeColor("blue"));
    // console.log(analyzeColor("red"));
    // console.log(analyzeColor("cyan"));


    // function analyzeColor(color) {
    //     switch(color){
    //         case "red":
    //             return "Red is cool!";
    //         case "blue":
    //             return "Blue is awesome!";
    //         case "yellow":
    //             return "Yellow is Great!";
    //         default:
    //             return "Unfamiliar with that color. That color is no good."
    //     }
    //
    // };
    // console.log(analyzeColor("blue"));
    // console.log(analyzeColor("red"));
    // console.log(analyzeColor("yellow"));

// 1. create a function named calculate total
// 2. establish two parameters one for luckyNumber and total amount
// 3. return discounted price
// 4. discounts
// 0 = No discount
// 1 = .1
// 2 = .25
// 3 = .35
// 4 = .5
// 5 = 1
    
//depending on the lucky number a disocunt will be applied
//     function calculateTotal(luckyNumber, total) {
//         //let discount = 0
//         if (luckyNumber === 0) {
//             return total +" You have no discount";
//         } else if (luckyNumber === 1) {
//         //    let discount = .10
//             return total + 'Congrats! Youre discounted total is ' + (.10 * total);
//         } else if (luckyNumber === 2) {
//         //    let discount = .25
//             return total + " Congrats! Youre discounted total is " + (.25 * total);
//         } else if (luckyNumber === 3) {
//         //    let discount = .35
//             return total + " Congrats! You'll get a 35 percent discount" + (.35 * total);
//         } else if (luckyNumber === 4) {
//         //    let discount = .50
//             return total + " Congrats1 You'll get a 50 percent discount " + (.59 * total);
//         } else if (luckyNumber === 5) {
//         //    let discount = .100
//             return total + " Congrats! You've won free groceries!" + (1 * total);
//         }
//     }
// let userBill = prompt("What was the total amount?");
//     alert("Your lucky number is : " + luckyNumber + ". Your total before discount: $ " + userBill + ". Your total after the discount: " + calculate(luckyNumber, userBill));
//     calculateTotal(luckyNumber, 100);
//
//     calculateTotal(0, 100) // returns 100
//     calculateTotal(4, 100) // returns 50
//     calculateTotal(5, 100) // returns 0

   
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

    


    // 1. need to confirm
    // 2. need to use a prompt()
    // 3. inpus must be a number data type
    //  if it is we need to then find
    // add alert is the number even or odd
    // add alert 100 to the number
    // and alert positve or negative
    // if its not:
    // alert incorrect data type
    // 4. if possible, refactor to function


        // 1. user Choice

        function playGame(){
    let doesUserConfirm = confirm("Do you want to play a game?");
    if (doesUserConfirm){
        // THEY WANNA PLAY!
        let userNum = parseFloat(prompt("pick a number!"))
        if(userNum === 0){
            alert("0 is neither odd nor even.")
            alert("0 is neither positve or negative.")
            alert("Your number + 100 = " +  (userNum + 100))
        } else if(!isNaN(userNum)){
            alert(userNum % 2 === 0 ? "Number is even" : "Number is odd.");
            alert(userNum > 0 ? "Number is positve." : "Number is negative. ")
            alert(userNum + 100)
        } else {
            alert("Sorry, what you have entered is not a number!")
        }

    }}
playGame();

    if (true) {
        let x = 5;
    }
    console.log(typeof x);


})();
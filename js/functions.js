"use strict";


function sayHello(name){
return prompt(" Hello", (name))
};
console.log(sayHello("bobby"));




function greet(name) {
return "Hello " + (name);
};
console.log(greet("bobby"));
//fist I made a function named greet that took,
//the variable name. Next I used return to merge,
//the string "Hello" with variable name, finally,
//I console logged greet as "bobby" run a test.





function sayHello(name) {
   return 'Hello, ' + name
    var helloMessage = sayHello("bobby")
};
console.log(sayHello);
//I created a function named sayHello that took variable,
//name. then i used return to merge the string "Hello" and
//name together. I then added a new
//variable of helloMessage = sayHello() with open brackets
//to leave the possibility of differnt inputs.
//finally I tested my code with console.log(sayHello("With the string Bobby")





let myName = "bobby";
function sayHello1(){
    return myName;
};
console.log(sayHello1());
//I assigned the variable let to myName
//then I assigned my name as "bobby" next I
//created the function sayHello1() and returned the
//variable my name.






var random = Math.floor((Math.random() * 3) + 1);

function isTwo(number2){
    return number2 == 2;
}
console.log(isTwo(random));
//I created a function named isTwo and assigned it the
//variable named number2. from there I used return variable is
//divisible of 2 and is ===0


function calculateTip(tip, bill){
  return (tip * bill) / 100;
}

console.log(calculateTip(20,20));
console.log(calculateTip(25,25));
console.log(calculateTip(15, 33));


let userTip= prompt ("what percentage would you like to tip?");
let userBill= prompt("what is the bill total?");

alert("the amount to tip is: $" + calculateTipgit (parseFloat(usertip),
    parseFloat(userBill));



function applyDiscount(price, dicountPercent){
    return totalprice - (price * discountPercent);
    return totalPrice;
}
alert(applyDiscount(100,2))


}

"use strict";
(function() {

//
// function timesFive(inputNum {
//     if (typeof inputNum !== "number") {
//         console.log("This is not a number");
//         return 0;
//     } else {
//         return inputNum * 5;
//     }
// }

// const timesFive = (x) => {
//     if(parseFloat(x) !== x){
//         return 0
//     }
//     return x * 5
// }
//
// console.log(timesFive(x:5));
// console.log(timesFive(x:10));
// console.log(timesFive(x:11));
// console.log(timesFive(x:3));

    // function numMultipliedFive(){
    //     let typeNum = Number(prompt("what is your num?"));
    //     if(isNaN(typeNum)){
    //         alert("0");
    //     } else {
    //         alert(typeNum * 5);
    //     }
    //
    // };
    // numMultipliedFive();

//function inBetween() {
//    if(min - max < num)return true;
// var min = Math.min.apply(Math[a,b]),
// var max = Math.max.apply(Math,[a, b]);
//     return this > min && this < max;
// };
//

    // function inBetween(min, max, num){
    //     let boolean;
    //     if(num < max && num > min){
    //         boolean = true;
    //         return boolean;
    //     }else{
    //         return false;
    //     }
    // }
    //

    function inBetween(min, max, num) {
        return num < max && num > min;

    }
    console.log(inBetween(5,10,7))
    // console.log(num < max;)
    // return num < max && num > min;

    //create a function named typePrinter that accepts
    //an array as a an input, and logs the data type

let arr = [true, "Icon", 25, "66",false,0];
function typePrinter(userArr){
for(let i = 0; i < userArr.length; i++){
    console.log(typeof userArr[i])
}
}
typePrinter(arr);
})();
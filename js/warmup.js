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





// function average(){
//     function calculateAverageOfArray(array) {
//         var total = 0;
//         var count = 0;
//
//         jQuery.each(arry, function(index, value) {
//             total += value;
//             count++;
//         });
//
//         return total / count;
//     }
//
//     console.log(calculateAverageOfArray(arry));
//     //-from (flexiple.com)
// }
function isNumeric(input){
    return !isNaN(parseFloat(input));
}
    function average(array){
    let i = 0;
    let sum = 0;
    while(i < array.length){
        if(isNumeric(array[i])) {
            sum += parseFloat(array[i]);
            i++;
        }else{
            return false;
        }
    }
    return sum / array.length;
}

function averag(input){
    let sum =0;
    for(let i=0; i< input.length; i==){
        if(isNumeric(input[i])){
            sum += parseFloat(input[i])
        }else{
            return false;
        }
    }
}



const filterNegativity = (arr) => {
    let postiveArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            postiveArray.push(arr[i]);


        }

    }return postiveArray;
}
    console.log(filterNegativity([5,-6,2,0,-5,-13]));


})();
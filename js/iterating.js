(function(){
    "use strict";

   let  name = ["bobby", "elliana", "analisia", "marina"];
    console.log(name.length);
    console.log(name[0]);
    console.log(name[1]);
    console.log(name[2]);
    console.log(name[3]);

    for(let i = 0; i < 5 ; i++){
        console.log(i);
    }

    //accessing array elements by using opeing and closing square bracket
//name.forEach(function(name){})
name.forEach(function(element, index, array ){
        console.log(name)
    })

//name.forEach(name => console.log(name));

//
// let first = [1,2,3,4,5]
// for (let i=0; i<5; i++)
//     console.log(i)
//
//
//     function first(arr) {
//         return arr[0];
//     }
//     function second(arr){
//         return arr[1];
//     }
//     function third(arr){
//         return arr[array.lenth -1];
//     }
//
//     let firstIndex = first(name);
//     console.log(firstIndex)
//     console.log(second(name));
//     console.log(third(name));

let questionOne = [1,2,3,4,5]
for(let i = 0 ; i < 6 ; i++)
    console.log(questionOne[0]);

let questionTwo = [1,2,3,4,5]
    for(let i = 0; i <= 4 ; i++)
        console.log(questionTwo[1]);

    let questionThree = [1,2,3,4,5]
    for(let i = 0; i<=5; i++)
        console.log(questionThree[4]);



})();
function showMultiplicationTable(num){
    for(let i = 1; i <= 10; i++){
        // let sum = num * i;
        console.log(num + " x " + i + " = " + num * i);
        // console.log(sum);
    }
}

showMultiplicationTable(7);


for(let i = 1; i < 10; i++) {
    var luckyNumber = Math.floor(Math.random() * (200 - 20)+20)
    // if(luckyNumber % 2 === 0 ){
    //     console.log(luckyNumber + " is " + "even");
    // } else {
    // console.log(luckyNumber)
    if (luckyNumber % 2 === 0) {
        console.log(luckyNumber + " is even");
    }
    continue;
    console.log(luckyNumber + "is odd");

}



for(let i =1; i < 10; i++){
    console.log(i.toString().repeat(i));
    console.log('${i} '.repeat(i));
}


for(let i = 100; i >= 5; i -= 5){
    console.log(i)
}



//
// let min = 2;
// let max =200;
//
// for(let i=1; i <=10; i++){ var random = function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//     if num %  === 0
//         return true;
// }else if{ num % === 0
//     return false;
//
// }}


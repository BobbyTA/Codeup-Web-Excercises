console.log("Hello from external JavaScript.")
alert("Welcome to my website")

alert(prompt("what is your favorite color?")+"is my favorite color too!")

let userColor = prompt("what is your favorite color");
console.log(userColor);

alert("Cool!" + userColor + " is my favorite color too!");

let littleMermaid = prompt("How long have you rented the little mermaid?");
//littleMermaid = 3
console.log (littleMermaid);

let brotherBear = prompt("How long have you rented brother bear?");
//brotherBear = 5
console.log (brotherBear);

let hercules = prompt("How long have you rented hercules?");
//hercules = 1
console.log (hercules);


let moviePrice = 3;
let finalMoviePrice = (littleMermaid * moviePrice) + (brotherBear * moviePrice) + (hercules * moviePrice);
alert(finalMoviePrice);



//let googlePay = prompt("How much does Google pay per hour?")
//let amazonPay = prompt("How much does Amazon pay per hour?")
//let facebookPay = prompt("How much does Facebook pay per hour?")

//let googleHours = prompt("How many hours did you work for google")
//let amazonHours = prompt("How many hours did you work for amazon")
//let facebookHours = prompt("How many hours did you work for facebook?")

//let payment = (googleHours * googlePay) + (amazonPay * amazonHours) + (facebookHours *facebookPay);
alert("Your payment is: " + payment);


//let isFull = confirm("Is the class full?");
//let hasConflict = confirm("do you have a conflict with your schedule?");
//alert(!isFull && !hasConflict);

let itemsBought = prompt("How many items did you buy");
let offer = confirm("Has the offer expired");
let isPremium = confirm("Are you a premium member?");

alert(itemsBought > 2 || isPremium && !offer);

//items bought is greater than two. the other fact is premium membership.
//it is (not) !offer because we are checking for an expired offer




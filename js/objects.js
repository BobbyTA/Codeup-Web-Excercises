(function() {
    "use strict";

    var person = {}
    person.firstName = "Bobby";
    person.lastName = "Atkins";

    person.sayHello = function (){
        alert(" Hello from " + person.firstName + " "  + person.lastName)
    }

    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.sayHello());





    var shoppers = {}
    shoppers.name = "Cameron";
    shoppers.amount = 180;
    shoppers.name = "Ryan";
    shoppers.amount = 250;
    shoppers.name = "George";
    shoppers.amount = 320;

  shoppers.discount = function() {
        if (shoppers.amount > 200) {
            return shoppers.amount - (shoppers.amount * .12)
        } else {
            return shoppers.amount
        }

    }




  var bookshelf = {}
    bookshelf.name = "The Batman";
    bookshelf.author.firstName = "Mr";
    bookshelf.author.lastName = "J";

    bookshelf.name = "Vince Russo";
    bookshelf.author.firstName = "Jim";
    bookshelf.author.lastName = "Cornette";

    bookshelf.name = "Death Note";
    bookshelf.author.firstName = "light";
    bookshelf.author.lastName = 'Yagami';

    bookshelf.name = "My hero";
    bookshelf.author.firstName = "Izuku";
    bookshelf.author.lastName = "Midoria";

    bookshelf.name = "Two Best Friends";
    bookshelf.author.firstName = "Mat";
    bookshelf.author.lastName = "Pat";

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
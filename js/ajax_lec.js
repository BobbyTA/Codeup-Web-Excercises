"use strict";

(function(){

    //AJAX = Asynchronous Javascript and XML
    //Asychronous = 2 events are happening and we time them to meet at the same time
    // Javascript = √
    // XML = eXtensible Markup Language - is how we structure our JSON file/data

    //JSON = Javascript Object Notation
    //Javascript = √
    // Object = how we read data in from our javascript object
    //Notation = XML - how we structure the data in our JSON file/data

    //XML/HTML = Markup Languages - how we structure files/data for javascript to read

    //$.ajax(url, data)
    //$.ajax(location, requested information)

    //Reguest types: GET/POSt, PUT, DELETE


    // syntax of an ajax request
    // the .done method waits for the request to and from the server to complete
    //$.ajax('url/').done(function(data, status, jqXhr){
    //    console.log(data);// print JSON object
    //})
    // Assign to variable
    //const apiURL = "/some-url"
    //$.get("/users") //similar to below
    // $.ajax('https://pokeapi.co/api/v2/pokemon/charmander', )
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/charmander',
        type: "GET",
    }).done(function(data, status, jqXhr) {
        alert("Everything went great! Check out the server's response in the console.");
        console.log(data);
        console.log(data.abilities[0].ability.name);
    }).fail(function(jqXhr, status, error) {
        alert("There was an error! Check the console for details");
        console.log("Response status: " + status);
        console.log("Error object: " + error);
    }).always(function() {
        alert("This function always runs! Spinning loading wheel goes away");
    });



//works the same as the request above

//     var jqXhr = $.ajax('https://pokeapi.co/api/v2/pokemon/charmander');
// // Attach callback functions individually
//     jqXhr.done(function(data, status, jqXhr) {
//         alert("Everything went great!");
//     });
//
//     jqXhr.fail(function(jqXhr, status, error) {
//         alert("There was an error!");
//     });
//
//     jqXhr.always(function() {
//         alert("And we're done!");
//     });






})();
"use strict";
(function(){
    // Lecture notes:
    // jQuery is a library (has prebuilt methods to import into javascript file - ready to use)
    // jQuery is the most used js library on the web
    // jQuery can 1. navigate and select DOM 2. handle events 3.  coordinate AJAX
    // API - Application Programming Interface: How our project documents communicate with each other and incoming data
    // REST - REpresentational State Transfer: Deals with how a user navigates our application
    // Difference between jQuery and getElementById <-- VanillaJS
    // Installing JQuery:
    //     option 1: import CDN into script tag at bottom of HTML body
    //     option 2: download jQuery javascript file, add to js file in project, and then import jQuery.js file into script tag at bottom of HTML body
    //



    //object.method
    // BOM object.method
    window.onload = function() {
        alert( 'The page has finished loading!' );
    }

    // jQuery alias is $
    $(function() {
        alert( 'The DOM has finished loading!' );
    });

    //all three of these functions do the same thing, written different ways
    jQuery(function() {
        alert( 'The DOM has finished loading!' );
    });

})();
//jQuery: Selectors
//best practice to wrap jquery in this
//makes sure loads on the document before invoking jquery
$(document).ready(function(){
    // $ is jquery alias
    // * means select "all"
    // for style use .css
    //innerHTML use .html

    //selecting html by element
    //jQuery('h3').html('NOT NOTICE');
    //selecting html by id
    //$('#first-id').html('NOT NOTICE');
    //selecting by class
    //$('.first-class').html('NOT NOTICE');

    //selecting css by class
    //syntax: $(class selector).css('attribute', 'value')
    $('.important').css('background-color', 'yellow');
    //selecting css by id
    $('#second-id').css('font-size', '50px');

    //multiple selectors
    //$('.important, p').html("We Changed This").css('background-color', 'blue')
    //the asterisk is the "all" selector
    $('*').html("We Changed This").css('background-color', 'blue');

    //jQuery: Mouse Events
    //.click()
    //.dblclick()
    //.hover()

    // the 'e' in the function parameter stands for 'event'
    $('#codeup').click(function(e) {
        alert('h1 with the id of "codeup" was double clicked!');
    });


    $('#codeup').dblclick(function(e) {
        alert('h1 with the id of "codeup" was double clicked!');
    });


    // the 'this' uses the same object attached to the method
    // in this case: this = '#codeup'
    $('#codeup').hover(
        function() {
            $(this).css('background-color', 'white');
        },
        function() {
            $(this).css('background-color', 'transparent');
        }
    );

})

// Keyboard Events lecture
// .keydown() - activates when a key is pressed and activates on all keys
// .keypress() - activates when a key is pressed and does not work with modifier keys (esc.)
// .keyup() - activates when a key is release and works with all keys


//$('document').ready(function () {
//    $('#textfield').keyup(function () {
//        alert('.keydown() event fired');
//    });
//});


// the .on() is best used with AJAX

//$('document').ready(function () {
//    $('#textfield').on('keyup',function (){
//      alert('.keyup() event fired');
//    });

//  $('#textfield').off('keyup');
//  });



})();
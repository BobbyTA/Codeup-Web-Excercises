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
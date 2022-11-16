"use strict";
(function(){
    $(function(){
        // var h1Contents = $('#h1-id').html()
        // alert(h1Contents);
        //alert(typeof(h1Contents));

        // var h1Contents = $('#p-id').html()
        // alert(h1Contents);

        //         Use the same id on 2 elements. How does this change the jQuery selection?
        // only alerted the first child with same id
        // var h1Contents = $('#li1-id').html()
        // alert(h1Contents);

        //$('.codeup').css('border', 'solid 1px red');
        //     Give another element an id of codeup. Does this element get a border now?
        // does nothing because we're selecting the codeup class not the id

        // $('li').css('font-size', '20px');
        // $('li').css('background-color', 'yellow');
        // $('h1').css('background-color', 'yellow');
        // $('p').css('background-color', 'yellow');

        // var h1Contents = $('h1').html()
        // alert(h1Contents);

        //another to select the three selectors h1, p, and li
        //$('h1, p, li').css('background-color', 'yellow');
        //
        // $('h1').click(function(){
        //     $('h1').css('background-color', 'green');
        // });
        //
        // $('p').dblclick(function(){
        //     $('p').css('font-size', '18px');
        // });

        $('li').hover(
            function() {
                $(this).css('color', 'red');
            },
            function() {
                $(this).css('color', 'black');
            }
        );

        //     Set all li text color to red when the mouse is hovering; reset to black when it is not.

    })
//$('selector').html("value changed to")
//example: $('h2').html("I changed it");


})();
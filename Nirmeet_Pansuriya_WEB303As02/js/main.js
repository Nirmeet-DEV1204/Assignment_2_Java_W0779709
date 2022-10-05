// WEB303 Assignment 2

// Author:Nirmeet Pansuriya


$(document).ready(function(){

    $('#prospect').click(function(){
        $('#content').empty();
        $( "#content").load( "prospect.html");
    });

    $('#convert').click(function(){
        $('#content').empty();
        $( "#content").load( "convert.html");
    });

    $('#retain').click(function(){
        $('#content').empty();
        $( "#content").load( "retain.html");
    });
});
console.log("Hello world");

$(document).ready(function () {

    console.login("JQuery is ready!!");

    $ ("#login").click(function (){

        $("#login").preventDefault();


        console.log("Button Clicked");

        var username = $("#username").val();

         var password = $("#password").val();

    });



});
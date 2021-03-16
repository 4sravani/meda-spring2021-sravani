console.log("Hello world");

$(document).ready(function () {

    console.log("JQuery is ready!!");

    $("#login").click(function (event) {

        event.preventDefault();

        var username = $("#username").val();
        var password = $("#password").val();

        if (username === "student") {
            
            if (password === "123456") {
                console.log("Congratz, you are now logged in!");
                window.location.replace("http://www.yahoo.com/");
            // } else if (password === "one23456") {
            //     console.log("The password is sort of right. But no dice.");
            } else {
                console.log("Wrong Password!");
            }

        } else {
            console.log("Username is Wrong! Please try again!!");
        }

    });

});
$(document).ready(function(event) {

    var keyPress = event.which;

    console.log( "The key pressed was: " + keyPress);

    if (keyPress == 104) {
        console.log("h was pressed");
    }

    console.log("hello!");

    $("p").text("Hello World");


    // Keypress Function

    $("#target").keypress(function() {

        var currentMarginTop = $("#target").css("margin-top");

        currentMarginTop = parseInt(currentMarginTop);

        console.log(currentMarginTop);

        var newMargin = (currentMarginTop + 10) + "px";

        $("#target").css("margin-top", newMargin);

        // Send current text to server and get suggestions

        console.log("Keyboard is getting pressed");
    });


  
  });
  

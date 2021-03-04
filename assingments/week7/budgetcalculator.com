<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Budget Calculator</title>

    <script src="jquery-3.5.1.min.js"></script>
    <style>
        #container {
            width: 900px;
            height: 500px;
            background-color: grey;
            display: flex;

        }
        #container div {
            flex-grow: 1;
            flex-basis: 50%;
        }

    </style>

</head>
<body>
    <div id="container">

        <div id="input"></div>

        <div id="inputs">
            <div>

            </div>
            <div>
                
            </div>
        </div>

        <div id="results">

        </div>


    </div>


 <script>

$(document).ready(function(){

// jQuery methods go here...

$(document).ready(function () {});

});
 </script>   
</body>
</html>
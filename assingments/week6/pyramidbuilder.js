/*


*
**
***
****
*****
****
***
**
*
*/




console.log("*");
console.log("**");
console.log("***");
console.log("****");
console.log("*****");
console.log("****");
console.log("***");
console.log("**");
console.log("*");


console.log("*");
console.log("**");
console.log("***");
console.log("****");
console.log("*****");
console.log("****");
console.log("***");
console.log("**");
console.log("*");

/*
var currentColumn = "*";

for (var i = 0; 1 <7;  i++ ) {
     console.log("*");

     currentColumn = currentColumn + "*";
}  
*/









//string to Arrays

var myString = "Sravani";

var myNewArray = myString.split(" ");

console.log(myNewArray);

myNewArray.pop(); 

console.log(myNewArray);

var myNewString = myNewArray.join(" ");

console.log(myNewString);


var userCharecterValue = "X";
var userHeightValue = 5 ;
var currentColumn = " ";

for (var i = 0; i < userHeightValue; i++ ) {
     currentColumn = currentColumn + userCharecterValue;

     console.log(currentColumn);
}

     for (var i = 0; i < userHeightValue - 1; i++) {
          currentColumn = removeLastChar(currentColumn);
          console.log(currentColumn);
      }






      for (var i = 0; i < userHeightValue - 1; i++) {
          currentColumn = removeLastChar(currentColumn);
          console.log(currentColumn);
      }
      
      

      function removeLastChar(text) {

          var textArray = text.split("");
          textArray.pop();
          var newText = textArray.join("");
          
          return newText;
      }
      



//how to use a function  function();

console.log("Good Morning, Sravani!");

//Variables


myFirstVariable = "My name is Patricia";
console.log(myFirstVariable);

var mySecondVariable = "My name is Emma";

console.log(mySecondVariable);

//Data types

//Strings

"My name is Patricia";
"What is your name";

//Number

10;
12;
50;
0;
600000;
10.7;
-20.5;
-9;
"10"; //is not a number it is a string

//Boolean
true;
false;

//mathematical operators
(10 +10 ); //20 addition is sum
(5 - 10); // -5 subtraction is difference
(2/6); // .40  division is quotient
(20 * 3); //60 multiplication is product
(10 % 3); // i remainder is modulus

// 105 % 2 == 1; IS ODD NUMBER
// 104 % 2 == 0; IS EVEN NUMBER


var myMostImportantNumber = (50-20);
console.log(myMostImportantNumber);

var currentCTemp = 2800;

var cToF = ( (currentCTemp * (9/5) ) + 32) ;

console.log(cToF);

// Logical Operators

// == Equal to

(100 == 100); // becomes a true
(101 == 100); // becomes a false
(101.1 == 101.2); // different values, so becomes false
("raining" == "sunny"); // becomes a false
("raining" == "raining"); // becomes a true
("Raining" == "raining"); // becomes false because of different character
(" raining" == "raining"); // false because of extra character "space"
(true == true); // true
(true == false); // false
(false == false); // true

// >, <, >=, <=   Greater Than, Lesser Than, Greater than or Equal to, Lesser than or Equal to

(100 > 40); // true
(100 < 40); // false
(-100 < 40); // true
(100 <= 100); // true
(99 <= 100); // true

// != Not Equal to
(100 != 100); // false
(100.1 != 100); // true



(mySecondVariable == "Sravani"); // False


// Boolean Operators

// NOT operator
!false; // true
!true; // false

// || OR operator

(true || false); // true
(false || true); // true
(false || false); // false

// && AND operator

(true && false); // false
(true && true); // true


(false || true || false);
//becomes
(true || false);
//becomes
true;


(100 == 100 || 50 == 51 || mySecondVariable == "Sravani");
//becomes
true || mySecondVariable == "Sravani";


var someData = "important";
someData = "not so important.";




var myFirstArray = ["Important", "Not so important"];





var dayOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

console.log(myFirstArray[0]);

console.log(dayOfWeek[5]);

dayOfWeek[7]= "Superday";

dayOfWeek[2] = "Whenesday";

console.log(dayOfWeek);


//array.push(); adds new value to array at the END of the existing array

myFirstArray.push("hello");

console.log(myFirstArray);

//array.pop() removes the value at the END of the array

myFirstArray.pop();

console.log(myFirstArray);

// array.unshift() adds value to the START of the array

myFirstArray.unshift("sunny day");

console.log(myFirstArray);

//array.shift() removes the value at the START of the array

myFirstArray.shift();

console.log(myFirstArray);

// array.splice();

dayOfWeek.splice( 3, 0, "Breakday");
 console.log(dayOfWeek);


 //Objects
 var personalInfo = {
     "firstName" : "Sravani",
     "job" : "Student",
     "age" : 30
 };

 var myThirdArray = [ "Sravani", "Student", 30];

 console.log(personalInfo ["firstName"]);
  console.log(personalInfo.job);

  personalInfo.job = "Sun Microsyatems";

  //add a new 

  personalInfo.favFood = "Tom Yum Soup";
  personalInfo.age = null; 
  
  //removes the key pair from the object, deletes age from array

delete personalInfo.age;

console.log(personalInfo);
console.log(typeof []);

// Conditional Statements. If statement needs to have a true value in order to run/execute the code in its code block.

// Conditional statement syntax
// if (true or false value) { code to run based on condition in parenthesis. }

if (personalInfo.firstName == "Sravani") {
    console.log("Welcome to our website, Sravani!");

}

var numberToTest = 0;
if (numberToTest > 0 ) {
    console.log("The number is positive");
} else {
    console.log("The number is not positive");
}

console.log("Hello");


if (numberToTest == 0) {
    console.log("The number is a zero");
   }   else {
        console.log("The number is not a zero");
    }


if (numberToTest < 0) {
    console.log("The number is negative.");

} else  {
    console.log ("The number is not negative");
}


var personAge = 40;

var perLikesDrinking = true;

if (personAge >= 21 && personAge <= 25) {
    console.log("Congratz! You are of drinking age!");

    if (personLikesDrinking == true) {
        console.log("What alcholic drink do you like?");
    }

} else if (personAge >= 26 && personAge <= 40) {
    console.log("Do you want to go grab a beer?");
} else {
    console.log("Have you tried video games?");
}


//While Loop, CHECK FIRST if condition is true, if true THEN run code block.
var continueRunning = 0;

while (continueRunning < 10) {

    console.log("We ran the loop once!");

    continueRunning = continueRunning + 1;

    var count = 0

    // while (count < 10) {
    //     console.log("inner loop ran!");
    //     count = count + 1;

    // }
}

var personAnswer = "no";

// Do While Loop, runs code block FIRST, then checks the condition.
do {
    console.log("Ran one loop!");

    // alert("Congratulations you are the millionth visitor! Collect your prize free iPod.");

    personAnswer = prompt("Continue the loop?");
} while (personAnswer == "yes");


// For loop, "condition" area has THREE parts
// syntax: for (counter; condition; iterator) {}

for (var keepRunning = 0; keepRunning < 10; keepRunning = keepRunning + 2) {
    console.log("This for loop ran once!");
}


for (var i = 0; i < 10; i++) {


    // if (valueAlreadyFound == true) {
    //     // If the program ever hits this keyword, it will end the loop completely.
    //     break;
    // }


    // if (color == "red") {
    //     // if the program hits this keyword, it will end this specific iteration.
    //     continue;
    // }

    console.log("the color is blue");


}


// double plus, adds a 1 to the variable.
// double minus, removes a 1 from the variable.
// i++ is the same as i = i + 1


// .forEach(); A function for arrays that goes through each element of the array and does something.

var someArray = [10, 20, 30, 40, 50];

someArray.forEach(function (arrayValue) {
    console.log(arrayValue + 100);
});



// Functions

function myFirstFunction() {
    console.log("hello from first function!");
}


myFirstFunction();
myFirstFunction();
myFirstFunction();


// Parameters (fancy name for Variable that belongs to a function) and Arguments (fancy name for the value of a parameter.)

// Parameters are written within the parenthesis of the DEFINITION

function addTwoNumbers(firstNumber, secondNumber) {
    var total = firstNumber + secondNumber;

    console.log(total);
}

// this variable doesn't exist because it only lives inside the addTwoNumbers function: console.log(firstNumber);


// Arguments are written within the parethesis of the CALL.

addTwoNumbers(10, 1);
addTwoNumbers(100, 5);
addTwoNumbers(-5, 10);




// Returning values from Functions

// Concatenation (fancy word for): combining two strings.

function makeExciting(sentence) {

    var excitingSentence = sentence + "!!!";

    console.log(excitingSentence);

    return excitingSentence;
}


var savedSentence = makeExciting("How are you doing");
var savedSentence2 = makeExciting("Would you like ice cream");

console.log("The Value: " + savedSentence);


// Example Function with Objects and Loops, Math Summarizer;

function mathSummarizer(num1, num2) {

    var sum = num1 + num2;
    var difference = num1 - num2;
    var differenceReversed = num2 - num1;
    var quotient = num1 / num2;
    var quotientReversed = num2 / num1;
    var product = num1 * num2;

    // return [sum, difference, differenceReversed, quotient, quotientReversed, product];

    var object = {
        "Sum": sum,
        "Difference": difference,
        "Difference Reversed": differenceReversed,
        "Quotient": quotient,
        "Quotient Reversed": quotientReversed,
        "Product": product
    };

    return object;
}


function mathForMe(num1, num2) {

    var number1 = num1;
    var number2 = num2;
    var results = mathSummarizer(number1, number2);

    for (var keyName in results) {

        console.log("The " + keyName + " of " + number1 + " and " + number2 + " is " + results[keyName]);
    
    }

    console.log(" ");
}

mathForMe(10,20); // Each of these calls are equivalent to ~25 lines of code
mathForMe(50,100);
mathForMe(54,234);
mathForMe(23,320);


// var number1 = 50;
// var number2 = 100;
// var results = mathSummarizer(number1, number2);

// console.log(results);

//var sumSentence = "The sum of 9 and 15 is " + results["Sum"];
//var productSentence = "The product of 9 and 15 is " + results["Product"];

//console.log(productSentence);

// for (var keyName in results) {

//     console.log("The " + keyName + " of " + number1 + " and " + number2 + " is " + results[keyName]);

// }





// NaN: Not a Number, meaning you multiplied or divided by a value that cannot be multiplied or divided. Example: console.log(mathSummarizer(0, 0));











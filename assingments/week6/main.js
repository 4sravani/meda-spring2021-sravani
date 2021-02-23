// how to Use a function: functionName();
console.log( "Good Morning Sravani");

console.log("Have a good day!");

var myFirstVariable;

// The three common Datatypes

//Strings
myFirstVariable = "My name is Sravani.";

console.log( myFirstVariable);


"What is your name?"
console.log( myFirstVariable);

var mySecondVariable =" My name is Victoria."

//Number
10;
9;
0;
100000;

//"10"; is a string, NOT A NUMBER

// Booleans
true;
false;

// mathematical operators
(10 + 10); //20 Addition  -> Sum
(5 - 10); //-5 Subtraction  -> Difference
(2 / 5); //.20 division  -> quotient
(10 *5 );  //50 multiplication  ->product
(10 %3) ;  // 1 modulus -> modulus

//105 % 2 == 1; IS ODD NUMBER

var myMostImportantNumber = (50 - 10);
console.log(myMostImportantNumber);

var currentTemp = 23;
var cToF = ( currentTemp * (9/5) + 32);
console.log( cToF);

//Logical operator

// == Equal to

(100 == 100); //becomes a true
(101 == 100); //becomes a false
("raining" == "sunny"); //becomes a false
("raining"  == "raining" );// becomes a true
("Raining" =="raining"); //becomes a false because of a different charecter , capital R
(" raining" == "raining"); //becomes a false because there is a extera space before the first r
(true == true); //true
(true == false); //false
(false == false); //true



// >, <, >=, <=, greater Than, Lesser Than, greater than Equal to, Lesser Than or Equal to

(100 > 40); // true
(100 < 40); // false
(-100 < 40); //true
(100 <= 100); //true
(99 <= 100); // true

// Less than Equal to
(100 != 100); // false
(100.1 != 100); //true

//Boolean Operator 
!false; // true
!true; // false

//Boolean Operator

// || or Operator

(true || false); //true
(false || true); //true
(false || false); //false

//  && AND operator

(true && false); //false
(true && true); //true

(false || true || false);
//becomes
(true || false);
// becomes true;

(100 == 100 || 50 == 51 || mySecondVariable == sravani);
// true || mySecondVariable == "sravani");

var someData = "important";
someData = "not so important";

//Arrays 

// Creating an Array and storing it in a variable.

 var myFirstArray =["important" , "not so important"]

 vardaysOfWeek =[
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
     "Sunday"
 ];

 console.log(myFirstArray[0]);

console.log(daysOfWeek[4]);

daysOfWeek[7] = "Superday";

daysOfWeek[2] = "Wednesday";

console.log( daysOfWeek);

//Array Functions

//array.push()  Adds the value to the end of array

myFirstArray.push( "Hello!");

console.log(myFirstArray);

myFirstArray.pop();  //removes the last value of the array 

console.log(myFirstArray);

//array.unshift(); adds vaalue to the START of the array

//array.shift();  Removes the value at the START of the array

console.log(myFirstArray);

//  array.splice();

daysOfWeek.splice(3, 0, "Breakday");

console.log(daysOfWeek);

// Objects , has no index number, has no order

var myFirstObject = {
  "value1" : "Sravani",
  "value2" : "Oracle",
  "value3": 30
};
console.log( myFirstObject[value2]);





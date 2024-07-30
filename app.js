// Chapter 1 (Alerts)

// Alert the First Name
alert("First Name: Sibghat");

// Alert the Last Name
alert("Last Name: Muneer");

// Alert the Email
alert("Email: ma2678143@gmail.com");

// Alert the Phone Number
alert("Phone Number: 03453469933");

// Alert the Password
alert("Password: mySecretPassword");


// Chapter 2 (Variables for string)

// 1. Declare any variable in the camelCase format

var myFirstVariable;

// Declare a variable without defining it
var myVariable;

// Assign a string to the variable
myVariable = "This is my string!";

// Declare the variable teamName
var teamName = "Sibghat";

// Alert the Team name
alert(teamName);

var bestMan = "Charlie";

// Assign the variable a new string
bestMan = "Michael";
 

// Chapter 3 (Variables for numbers)

var caseQty;

caseQty = 144;

var num = 9; // Now num is a number, not a string

// Declare a variable
var sum;

// Assign it the sum of 2 numbers
sum = 5 + 10; // Example: sum is assigned the value 15


var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;

orderTotal = 100 + 10; // orderTotal is 110

// Declare a variable and assign it a number
var myNumber = 25;

// Change the value of the variable by adding it together with a number
myNumber = myNumber + 15; // Now myNumber is 40

// Chapter 4 (Variable names Legal and Illegal) 

var productCost = 3.45;
var nameOfBand;
var itemQuantity = 10;
var sibghatMuneer;

// Examples of legal variables:
var firstName;
var $amount;
var _total;
var productCost;
var userAge;
var sibghatMuneer;

// Examples of illlegal variables

var 1stName;      // Starts with a digit
var product cost; // Contains a space
var user-name;    // Contains a hyphen
var var;          // Reserved word
var function;     // Reserved word


// Chapter 5 (Math Expression I)

Name: Modulus
Symbol: %

var num = 20 % 6;  

// The value of num will be the remainder when 20 is divided by 6, which is 2.

var largeNum = 1000 * 2000;

var a = 50;
var b = 20;
var difference = a - b;

var remainder = 25 % 4;

var result = 7 * 8;
alert("The result of the multiplication is: " + result);


// Chapter 6 (Math Expression II)

x += 1;
// or
x++;

x--;
// or
x -= 1;

var x = 50;
var y = x++;


var y = 50;
var z = --y;

var num = 10; // Example value
var newNum = num--;


// Chapter 7 (Math Expression III)

1. var calculatedNum = 2 + (2 * 6);
To find the value of calculatedNum, follow the order of operations (PEMDAS/BODMAS):

First, calculate the multiplication inside the parentheses: 
2
×
6
=
12
2×6=12
Then, add the result to 2: 
2
+
12
=
14
2+12=14
So, the value of calculatedNum is 14.

2. var calculatedNum = (2 + 2) * 6;
To find the value of calculatedNum:

First, calculate the addition inside the parentheses: 
2
+
2
=
4
2+2=4
Then, multiply the result by 6: 
4
×
6
=
24
4×6=24
So, the value of calculatedNum is 24.

3. var calculatedNum = (2 + 2) * (4 + 2);
To find the value of calculatedNum:

First, calculate the additions inside the parentheses:
2
+
2
=
4
2+2=4
4
+
2
=
6
4+2=6
Then, multiply the results: 
4
×
6
=
24
4×6=24
So, the value of calculatedNum is 24.

// 4. var calculatedNum = ((2 + 2) * 4) + 2;
// To find the value of calculatedNum:

// First, calculate the addition inside the innermost parentheses: 
// 2
// +
// 2
// =
// 4
// 2+2=4
// Then, multiply the result by 4: 
// 4
// ×
// 4
// =
// 16
// 4×4=16
// Finally, add 2 to the result: 
// 16
// +
// 2
// =
// 18
// 16+2=18
// So, the value of calculatedNum is 18.

// Chapter 8 (Concatenating Text
//     Strings)


var num = "2" + "2"; // num is "22"
message = "Hello," + "Dolly"; 
alert(message); // This will display "Hello,Dolly" in the alert box

// Chapter 9 (Prompts)

var firstName = prompt("Enter first name");

var country = prompt("Country?", "China");

var yourName = prompt("Enter Your Name");

// Chapter 10 (if statments)

var city = "Karachi";
if (city === "Karachi") {
  console.log("The City of Lights");
}


if (x === y) {
    var z = prompt("Value of z?");
  }

  
//   Chapter 12 (if…else and else if
//     statements)

var value1 = 10; // Example value
var value2 = 5;  // Example value

if (value1 >= value2) {
  alert("value1 is greater than or equal to value2");
} else {
  alert("value1 is less than value2");
}


// Get marks from the user
var totalMarks = parseFloat(prompt("Enter total marks"));
var obtainedMarks = parseFloat(prompt("Enter obtained marks"));

// Calculate percentage
var percentage = (obtainedMarks / totalMarks) * 100;

// Determine grade based on percentage
var grade;
if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else {
  grade = "F";
}

// Display the result
alert("Your percentage is " + percentage.toFixed(2) + "% and your grade is " + grade);



var a = 5; // Example value

if (a === 10) {
  alert("a is 10");
} else {
  alert("The correct value of a is " + a);
}

// chapter 14 (If statements nested)

var password = prompt("Enter your password");

if (password !== "") { // Check if password is not empty
  if (password.length <= 5) { // Check if password length is not greater than 5
    alert("Password must be greater than 5");
  } else {
    alert("OK");
  }
} else {
  alert("Password cannot be empty");
}

// Chapter 15 (Array I)
var emptyArray = [];
var singleElementArray = ["Hello"];
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]); // The index of "j" is 2

// Chapter 16 (Array II)

// Code an array with 1 string element
var myArray = ["Initial"];

// Add an additional element to the array
myArray.push("New Element");

// Create an alert with the last element
alert(myArray[myArray.length - 1]); // The last element is "New Element"

var Alphabet = ["h", "i", "j", "k"];

// Remove the last element from the array
Alphabet.pop(); // Removes "k"

var Alphabet = ["h", "i", "j", "k"];

// Add a new element, a number, to the end of the array
Alphabet.push(5); // Adds the number 5

// Chapter 16 (Array III)

var sizes = ["S", "M", "XL", "XXL", "XXXL"];

// Remove the first element of the array
sizes.shift(); // Removes "S"

var sizes = ["S", "M", "XL", "XXL", "XXXL"];

// Add three number elements to the beginning of the array
sizes.unshift(1, 2, 3); // Adds 1, 2, and 3 to the beginning

// Declare an array with one element
var myArray = ["Second Element"];

// Add a second element to the beginning of the array
myArray.unshift("First Element");

// Create an alert with the new first element
alert(myArray[0]); // Displays "First Element"

var sizes = ["S", "M", "XL", "XXL", "XXXL"];

// Insert "L" into the array between "M" and "XL"
sizes.splice(2, 0, "L"); // At index 2, remove 0 elements, add "L"

var sizes = ["S", "M", "XL", "XXL", "XXXL"];

// Copy the first 3 sizes into a new array
var regSizes = sizes.slice(0, 3); // ["S", "M", "XL"]









   




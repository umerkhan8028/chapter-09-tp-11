// Take input from the user for the city name
var cityName = prompt("Enter the name of your city:");

// Check if the entered city is "Karachi"
if (cityName && cityName.toLowerCase() === "karachi") {
  console.log("Welcome to the city of lights, Karachi!");
} else {
  console.log("Welcome! Enjoy your time in " + cityName + ".");
}

// Take input from the user for gender
var gender = prompt("Enter your gender (male/female):");

// Check the user's gender and display the appropriate message
if (gender) {
  if (gender.toLowerCase() === "male") {
    console.log("Good Morning Sir.");
  } else if (gender.toLowerCase() === "female") {
    console.log("Good Morning Ma'am.");
  } else {
    console.log("Invalid input. Please enter 'male' or 'female'.");
  }
} else {
  console.log("No input provided. Please enter your gender.");
}

var color = prompt("Enter your traffic color")
if (color){
    if(color.toLowerCase() === "red") { 
    console.log("Must Stop")
} else if (color.toLowerCase() === "yellow"){
    console.log("Ready to move")
} else if (color.toLowerCase() === "green" ){
    console.log("Move now")
}else {
    console.log("Invalid input. Please enter valid")
}
} else {
    console.log
}

// Take input from the user for remaining fuel in the car
var remainingFuel = +(prompt("Enter the remaining fuel in your car (in liters):"));

// Check if the remaining fuel is less than 0.25 liters
if (!isNaN(remainingFuel) && remainingFuel < 0.25) {
  console.log("Please refill the fuel in your car.");
} else {
  console.log("Your car has sufficient fuel. Keep driving!");
}





// a.
var a = 4;
if (++a === 5){
  alert("given condition for variable a is true");
}
// Output: The alert message will be displayed because (++a) increments 'a' to 5, and the condition is true.

// b.
var b = 82;
if (b++ === 83){
  alert("given condition for variable b is true");
}
// Output: The alert message will not be displayed because (b++) increments 'b' after the comparison, and the condition is false.

// c.
var c = 12;
if (c++ === 13){
  alert("condition 1 is true");
}
if (c === 13){
  alert("condition 2 is true");
}
if (++c < 14){
  alert("condition 3 is true");
}
if(c === 14){
  alert("condition 4 is true");
}
// Output: The alert messages for "condition 2" and "condition 4" will be displayed.

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
  alert("The cost equals");
}
// Output: The alert message will be displayed because the totalCost is equal to the sum of laborCost and materialCost.

// e.
if (true){
  alert("True");
}
if (false){
  alert("False");
}
// Output: Only the alert message for "True" will be displayed.

// f.
if("car" < "cat"){
  alert("car is smaller than cat");
}
// Output: The alert message will be displayed because, in string comparison, "car" comes before "cat".




// Take input for marks obtained in three subjects
var EnglishMarks = parseFloat(prompt("Enter marks obtained in English:"));
var UrduMarks = parseFloat(prompt("Enter marks obtained in Urdu:"));
var MathMarks = parseFloat(prompt("Enter marks obtained in Math:"));

// Take input for total marks
var totalMarks = parseFloat(prompt("Enter total marks for each subject:"));

// Calculate total obtained marks and percentage
var totalObtainedMarks = EnglishMarks + UrduMarks + MathMarks;
var percentage = totalObtainedMarks / totalMarks * 100;

// Determine the grade based on the percentage
var grade;
if (percentage >= 80) {
  grade = 'A';
} else if (percentage >= 70) {
  grade = 'B';
} else if (percentage >= 60) {
  grade = 'C';
} else if (percentage >= 50) {
  grade = 'D';
} else {
  grade = 'Fail';
}

// Display the result on the console
console.log("Total Marks: " + 3 * totalMarks);
console.log("Marks Obtained: " + totalObtainedMarks);
console.log("Percentage: " + percentage + "%");
console.log("Grade: " + grade);

// Display remarks based on the grade
switch (grade) {
  case 'A':
    console.log("Remarks: Excellent");
    break;
  case 'B':
    console.log("Remarks: Good");
    break;
  case 'C':
    console.log("Remarks: Satisfactory");
    break;
  case 'D':
    console.log("Remarks: Needs Improvement");
    break;
  default:
    console.log("Remarks: Fail");
}



// Store a secret number (ranging from 1 to 10)
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt user to guess the secret number
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess is correct or close enough
if (userGuess === secretNumber) {
  console.log("Bingo! Correct answer.");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
  console.log("Close enough to the correct answer.");
} else {
  console.log("Sorry, incorrect guess. The correct answer was " + secretNumber + ".");
}

// Prompt user to enter a number
var userNumber = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 3
if (!isNaN(userNumber)) {
  if (userNumber % 3 === 0) {
    console.log(userNumber + " is divisible by 3. Message: Divisible!");
  } else {
    console.log(userNumber + " is not divisible by 3. Message: Not divisible.");
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}

// Prompt user to enter a number
var userNumber = parseInt(prompt("Enter a number:"));

// Check if the number is even or odd
if (!isNaN(userNumber)) {
  if (userNumber % 2 === 0) {
    console.log(userNumber + " is an even number.");
  } else {
    console.log(userNumber + " is an odd number.");
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}



// Prompt user to enter the temperature
var temperature = parseInt(prompt("Enter the temperature in Celsius:"));

// Check and display messages based on temperature
if (!isNaN(temperature)) {
  if (temperature > 40) {
    console.log("It is too hot outside.");
  } else if (temperature > 30) {
    console.log("The Weather today is Normal.");
  } else if (temperature > 20) {
    console.log("Today’s Weather is cool.");
  } else if (temperature > 10) {
    console.log("OMG! Today’s weather is so Cool.");
  } else {
    console.log("It is extremely cold outside.");
  }
} else {
  console.log("Invalid input. Please enter a valid temperature.");
}


// Prompt user to enter the first number
var firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt user to enter the second number
var secondNumber = parseFloat(prompt("Enter the second number:"));

// Prompt user to enter the operation
var operation = prompt("Enter the operation (+, -, *, /, %):");

// Check if the inputs are valid numbers
if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
  // Perform the operation based on user input
  if (operation === '+') {
    console.log("Result: " + (firstNumber + secondNumber));
  } else if (operation === '-') {
    console.log("Result: " + (firstNumber - secondNumber));
  } else if (operation === '*') {
    console.log("Result: " + (firstNumber * secondNumber));
  } else if (operation === '/') {
    if (secondNumber !== 0) {
      console.log("Result: " + (firstNumber / secondNumber));
    } else {
      console.log("Error: Division by zero is not allowed.");
    }
  } else if (operation === '%') {
    console.log("Result: " + (firstNumber % secondNumber));
  } else {
    console.log("Invalid operation. Please enter a valid operation.");
  }
} else {
  console.log("Invalid input. Please enter valid numbers.");
}
























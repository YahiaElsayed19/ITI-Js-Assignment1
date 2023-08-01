// Q1

// var enteredNumber = parseInt(window.prompt("Enter a number"))
// console.log(enteredNumber);
// document.getElementById("entered-number").innerHTML = `Entered Number = ${enteredNumber}`

// --------------------------------------------------------------------

//Q2

// var enteredNumber = Number(window.prompt("Enter a number"))
// console.log(enteredNumber);
// if (enteredNumber % 3 === 0 && enteredNumber % 4 === 0) {
//     console.log("Yes");
// } else {
//     console.log("no");
// }

// --------------------------------------------------------------------

// Q3

// var firstNumber = Number(window.prompt("Enter first number"))
// var secondNumber = Number(window.prompt("Enter second number"))

// if (firstNumber > secondNumber) {
//     console.log(firstNumber);
//     document.getElementById("max-number").innerHTML = `Max Number = ${firstNumber}`
// } else {
//     console.log(secondNumber);
//     document.getElementById("max-number").innerHTML = `Max Number = ${secondNumber}`
// }

// --------------------------------------------------------------------

//Q4

// var enteredNumber = Number(window.prompt("Enter a number"))
// if (enteredNumber < 0) {
//     console.log("Negative");
//     document.getElementById("number-type").innerHTML = `Number type is ( Negative )`
// } else {
//     console.log("Positive");
//     document.getElementById("number-type").innerHTML = `Number type is ( Positive )`
// }

// --------------------------------------------------------------------

//Q5

// var firstNumber = Number(window.prompt("Enter first number"))
// var secondNumber = Number(window.prompt("Enter second number"))
// var thirdNumber = Number(window.prompt("Enter third number"))

// var numbersArray = [firstNumber, secondNumber, thirdNumber]
// var sortednumbersArray = numbersArray.sort((a, b) => a - b);

// console.log(`Max number: ${sortednumbersArray[2]}`, `Min number: ${sortednumbersArray[0]}`);
// document.getElementById("max-number").innerHTML = `Max Number = ${sortednumbersArray[2]}`
// document.getElementById("min-number").innerHTML = `min Number = ${sortednumbersArray[0]}`

// --------------------------------------------------------------------

//Q6

// var enteredNumber = Number(window.prompt("Enter a number"))
// if (enteredNumber % 2 == 0) {
//     console.log("even");
//     document.getElementById("number-type").innerHTML = `Number type is ( even )`
// } else {
//     console.log("odd");
//     document.getElementById("number-type").innerHTML = `Number type is ( odd )`
// }

// --------------------------------------------------------------------

//Q7

// var enterdLetter = window.prompt("Enter a letter")
// switch (enterdLetter.toLocaleLowerCase()) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("Vowel")
//     document.getElementById("letter-type").innerHTML = `letter type is ( vowel )`
//         break;
//     default:
//         console.log("Constant");
//     document.getElementById("letter-type").innerHTML = `letter type is ( constant )`
// }

// --------------------------------------------------------------------

//Q8

// var enteredNumber = Number(window.prompt("Enter a number"))
// for (let i = 1; i <= enteredNumber; i++) {
//     console.log(i);
// }

// --------------------------------------------------------------------

//Q9

// var enteredNumber = Number(window.prompt("Enter a number"))
// for (let i = 1; i <= 12; i++) {
//     console.log(i * enteredNumber);
// }

// --------------------------------------------------------------------

//Q10

// var enteredNumber = Number(window.prompt("Enter a number"))
// for (let i = 1; i <= enteredNumber; i++) {
//     if (i % 2 == 0){
//         console.log(i);
//     }
// }

// --------------------------------------------------------------------

//Q11

// var firstNumber = Number(window.prompt("Enter first number"))
// var secondNumber = Number(window.prompt("Enter second number"))
// console.log(firstNumber ** secondNumber);
// document.getElementById("power-result").innerHTML = `${firstNumber} ^ ${secondNumber} = ${firstNumber ** secondNumber}`

// --------------------------------------------------------------------

//Q12

// var subjectsArray = []
// var total = 0
// for (var i = 0; i < 5; i++) {
//     subjectsArray[i] = Number(window.prompt(`Enter subject number ${i + 1}`))
//     total += subjectsArray[i]
// }
// console.log("Total marks = " + total);
// console.log("Average marks = " + total / 5);
// console.log("Percentage = " + (total / 500) * 100);

// --------------------------------------------------------------------

//Q13

// var monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];
// var monthsWith30Days = [4, 6, 9, 11];
// var enteredMonth = Number(prompt("Enter month number between (1-12):"));

// if (enteredMonth === 2) {
//     console.log(`Number of days in month ${enteredMonth}: 28 or 29`);
// } else if (monthsWith31Days.includes(enteredMonth)) {
//     console.log(`Number of days in month ${enteredMonth}: 31`);
// } else if (monthsWith30Days.includes(enteredMonth)) {
//     console.log(`Number of days in month ${enteredMonth}: 30`);
// } else {
//     console.log("Invalid month number. Please enter a number between 1 and 12.");
// }

// --------------------------------------------------------------------

//Q14

// var subjectsArray = ["Physics", "Chemistry", "Biology", "Mathematics", "Computer"]
// var total = 0

// for (var i = 0; i < subjectsArray.length; i++) {
//     subjectsArray[i] = Number(window.prompt(`Enter ${subjectsArray[i]} mark:`))
//     total += subjectsArray[i]
// }
// var percentage = (total / 500) * 100
// var grade
// if (percentage >= 90) {
//     grade = "A"
// } else if (percentage >= 80) {
//     grade = "B"
// } else if (percentage >= 70) {
//     grade = "C"
// } else if (percentage >= 60) {
//     grade = "D"
// } else if (percentage >= 40) {
//     grade = "E"
// } else {
//     grade = "F"
// }
// console.log(`The percentage is ${percentage} and the grade is ${grade}`);

// --------------------------------------------------------------------

//Q15

// var enteredMonth = Number(prompt("Enter month number between (1-12):"));

// var daysInMonth;

// switch (enteredMonth) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         daysInMonth = 31;

//         break;

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         daysInMonth = 30;
//         break;

//     case 2:
//         daysInMonth = "28 or 29";
//         break;

//     default:
//         daysInMonth = -1;
//         break;
// }

// console.log(`Number of days in month ${enteredMonth}: ${daysInMonth}`);
// document.getElementById("number-of-days").innerHTML = `Number of days in month ${enteredMonth} is ${daysInMonth}`

//---------------------------------------------------------------------

//Q16

// var enterdLetter = window.prompt("Enter a letter")
// switch (enterdLetter.toLocaleLowerCase()) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("Vowel");
//         document.getElementById("letter-type").innerHTML = `letter type is ( vowel )`
//         break;
//     default:
//         console.log("Constant");
//         document.getElementById("letter-type").innerHTML = `letter type is ( constant )`
// }

//---------------------------------------------------------------------

//Q17

// var firstNumber = Number(window.prompt("Enter first number"))
// var secondNumber = Number(window.prompt("Enter second number"))
// var maxOfTwoNumbers;

// switch (true) {
//     case firstNumber > secondNumber:
//         maxOfTwoNumbers = firstNumber;
//         break;

//     case secondNumber > firstNumber:
//         maxOfTwoNumbers = secondNumber;
//         break;

//     default:
//         maxOfTwoNumbers = "Both numbers are equal.";
//         break;
// }

// console.log("Maximum number:", maxOfTwoNumbers);
// document.getElementById("letter-type").innerHTML = `Maximum number: ${maxOfTwoNumbers}`

//---------------------------------------------------------------------

//Q18

// var enteredNumber = Number(window.prompt("Enter a number"))
// var numberType
// switch (enteredNumber % 2) {
//     case 0:
//         numberType = "Even";
//         break;

//     case 1:
//         numberType = "Odd";
//         break;

//     default:
//         numberType = "Invalid input";
//         break;
// }

// console.log(`${enteredNumber} is ${numberType}.`);
// document.getElementById("number-type").innerHTML = `${enteredNumber} is ${numberType}.`

//---------------------------------------------------------------------

// Q19

// var enteredNumber = Number(window.prompt("Enter a number"))
// var numberType
// switch (true) {
//     case enteredNumber > 0:
//         numberType = "positive";
//         break;

//     case enteredNumber < 0:
//         numberType = "negative";
//         break;

//     default:
//         numberType = "zero";
//         break;
// }

// console.log(`${enteredNumber} is ${numberType}.`);

//---------------------------------------------------------------------

//Q20

// var firstNumber = Number(window.prompt("Enter first number"))
// var secondNumber = Number(window.prompt("Enter second number"))
// var operation = window.prompt("Enter a operation from ( +, - , * , / )")

// var result;

// switch (operation) {
//     case "+":
//         result = firstNumber + secondNumber;
//         break;

//     case "-":
//         result = firstNumber - secondNumber;
//         break;

//     case "*":
//         result = firstNumber * secondNumber;
//         break;

//     case "/":
//         result = firstNumber / secondNumber;
//         break;

//     default:
//         result = "Invalid operation";
//         break;
// }

// console.log(`Result: ${result}`);

//---------------------------------------------------------------------

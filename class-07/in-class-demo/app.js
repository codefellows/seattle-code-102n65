// STRUCTURE OF A FUNCTION

// FUNCTION DECLARATION looks like this:

//  function functionName(parameters){
//    code to be executed;
//  }

// PARAMETERS are extra data the function needs to work                    
//                           2 parameters (name them whatever you like)
function addTwoNumbers(number1, number2){
  console.log(number1 + number2);
  return number1 + number2;
}

// When we pass the data to the function, it's called arguments

// Invoke the function, pass it 2 arguments
addTwoNumbers(1, 4);
addTwoNumbers("Hello ", "world");

// A return statement is how we can access information from a function.
// Store it in a variable to use the value returned
let sum = addTwoNumbers(50, 14); // sum is holding the value returned from the function

// Global variables are available everywhere
let userName = '';

function getName() {
  // you can reassign the value of global variables inside functions
  userName = prompt("What is your name?");
  // print message to console
  console.log('User entered: ' + userName);
  // write message to the HTML document
  document.write("Greetings, " + userName + ", welcome to my page!");
  
}

function myFavColor() {
  // local variables are only available inside the function
  let guess = prompt("What's my fav color?");
  if (guess == 'yellow') {
    document.write("You're correct, " + userName + ", my fav color is yellow!")
  } else {
    guess = prompt("Guess again!");
  }
}

// console.log(guess) <-- WON'T WORK! The variable 'guess' only exists inside the myFavColor function

function likedIt() {
  let response = prompt("Did you like my page?");
  response = response.toLowerCase();
  console.log("Did user like my page? : " + response);

  if (response == "yes") {
    document.write("Come back soon!");
  } else if (response == "no") {
    document.write("Thanks for visiting!");
  } else {
    document.write("That is not a response I was looking for...");
  }
}

function guessNumber(){
  let userNum = prompt("Guess what number I'm thinking of");
 
  if (userNum === 42) {
    console.log("You guessed it!");
  } else if (userNum < 42) {
    console.log("Your number was less than my number");
  } else if (userNum > 42) {
    console.log("Your number was greater than my number");
  } else {
    console.log("That's not a number");
  }
}




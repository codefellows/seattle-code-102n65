'use strict';

// REVIEW NOTES REGARDING PARAMETERS
function sayHello(yourName){ // this function requires extra data, a PARAMETER we're calling yourName
  console.log("Hello, and welcome " + yourName);
}

// When invoking the function, we need to pass it that extra data - now called an ARGUMENT
sayHello("Kassie"); // prints to console "Hello, and welcome Kassie"
sayHello("Armon"); // prints to console "Hello, and welcome Armon"
sayHello("Robert"); // prints to console "Hello, and welcome Robert"
sayHello("Ayfer"); // prints to console "Hello, and welcome Ayfer"

// -----------------------------------------------------------

// STRUCTURE of a WHILE loop - when we don't know how many times the loop needs to execute
// while (condition evaluates to true){ execute this code }

function guessColor(){
  let response = prompt("What is my fav color?");
  while (response !== 'yellow'){
    response = prompt("Wrong! Guess again");
  }
  alert("Congrats, you guessed it!");
}

// STRUCTURE of a FOR loop - when we know ahead of time how many loops we need
// for (initial value; condition to evaluate; increment){ code to execute }

// using a for loop to write an HTML img to our page as many times as the user told us
function rateMyPage(){
  let rating = prompt("On a scale of 1-5, how embarrassed should I be of this page?");
  for (let i = 0; i < rating; i++){
    document.write('<img class="function-pic" src="embarrassing.jpeg" alt="funny meme" />');
  }
}
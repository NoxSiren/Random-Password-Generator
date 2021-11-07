// create prompts to determine password criteria
// user can respond with a true or false
// based on user response determins possible characters for password
// check length input to ensure at least 8 chr no more than 128 chr
// check to see that one prompt was true
// after all prompts have been answered generate a random password
// ensure generate password function has a return value

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];


// An empty array made to store the input provided by the user
var passwordPool = [];

// Function declaration
function passwordGen() {

  // Prompting user to select a number between 8 - 128
  var userNumber = parseInt(prompt("Choose a number between 8 - 128 to generate your password!"));

  // User will be alerted to "try again" if they select a number outside 8 and 128 
  if (userNumber < 8 || userNumber > 128 || isNaN(userNumber)) {
    alert("The value is invalid. Please try again."); return passwordGen();
  }




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/*function generatePassword(){
  var result = confirm("Would you like numbers?");
  var passChar = []
  if (result){
    passChar= passChar.concat(numbers);
    console.log(passChar)
  }
}

function generatePassword(){
  var result = confirm("Would you like lower case letters?");
  var lowerCase = []
  if (result){
    lowerCase= lowerCase.concat(lower);
    console.log(lowerCase)
  }
}
*/
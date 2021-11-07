// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//create prompts to determine password criteria
//user can respond with a true or false
//based on user response determins possible characters for password
//check length input to ensure at least 8 chr no more than 128 chr
//check to see that one prompt was true
//after all prompts have been answered generate a random password
//ensure generate password function has a return value

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9','0']

function generatePassword(){
  var result = confirm("Would you like numbers?");
  var passChar = []
  if (result){
    passChar= passChar.concat(numbers);
    console.log(passChar)
  }
}

var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function generatePassword(){
  var result = confirm("Would you like lower case letters?");
  var lowerCase = []
  if (result){
    lowerCase= lowerCase.concat(lower);
    console.log(lowerCase)
  }
}
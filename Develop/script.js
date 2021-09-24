
var string = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
var passwd = "";



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


function generatePassword() {
  console.log("generatePassword has been called!")

  var passwd = '';
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
   'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    
  for (i = 1; i <= 8; i++) {
    var char = Math.floor(Math.random() * string.length + 1);
    pass += str.charAt(char)
  }
    
  return pass;
}

function gfg_Run() {
  el_down.innerHTML = generateP();
}
  



function userChoice() {
  var userChoice = prompt("how many characters do you want to generate?")
  console.log("password_length");

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function askUser() {
  var userChoice = prompt("how many characters do you want to generate?")
}


    
// create for loop to choose password characters
   


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// TODO: write the generatePassword function
// TODO: ask the user how many characters they want in the password -> use a prompt which will be set to var-> make sure info is correct 
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page..
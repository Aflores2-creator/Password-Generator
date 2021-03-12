// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  var finalValue = "";
  var characterCount = prompt("How many characters?");
  var includeSpecialCharacters = confirm("Allow special characters?");

  if (characterCount >= 8){

  }
 function generatePassword (passwordLength)
 var numberChars = "0123456789";
 var upperChars = "ABCDEFGHIJKLMNOPQURSTUVWXYZ"
 var lowerChars = "abcdefghijklmnopqurstuvwxyz"
 var allChars = numberChars + upperChars + lowerChars;



  return finalValue

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword("#password");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

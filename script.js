// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  var finalValue = "";
  var characterCount = prompt("How many characters?");
  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var upperCases = confirm("Do you want uppercases in your password?");

  if (characterCount >= 8){

  }
 function generatePassword (passwordLength){
  var numberChars = ("0123456789");
  var upperChars = ("ABCDEFGHIJKLMNOPQURSTUVWXYZ");
  var lowerChars = ("abcdefghijklmnopqurstuvwxyz");
  var allChars = numberChars + upperChars + lowerChars;
  var randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = numberChars;
  randPasswordArray[1] = upperChars;
  randPasswordArray[2] = lowerChars;
  randPasswordArray = randPasswordArray.fill(allChars, 3);
  return shufflearray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join("");

  function shufflearray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array [i];
      array[i] = array [j];
      array[j] = temp; 

    }
  }
    return array;


  }



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

// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  function generatePassword() {
    //* Inquire data from the user once the "Generate Password" button is clicked

    var passwordLength = window.prompt("How long would you like the generated password to be?\n(8-128 characters)");
    // if the user's input contained an invalid number:
    if (passwordLength < 8 || passwordLength > 128) {
      // restart function if the user's input is invalid
      generatePassword();
    } 
    // the user's input contained a valid number:
    else {
      var passwordLowercase = window.confirm("Would you like to include lowercase letters in the generated password?");
      var passwordUppercase = window.confirm("Would you like to include uppercase letters in the generated password?");
      var passwordNumbers = window.confirm("Would you like to include numbers in the generated password?");
      var passwordSpecial = window.confirm("Would you like to include special characters in the generated password?");
    } 
    // if the user did not select any character types:
    if (!passwordLowercase && !passwordUppercase && !passwordNumbers && !passwordSpecial) {
      window.alert("ERROR:\nYou must select one or more character type(s) to include in the password.\n\nRefresh this page to try again.");
    };

    //* Generate password from the user's inputs

    // characters for each character type
    var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberCharacters = "1234567890";
    var specialCharacters = `~!@#$%^&*()-_=+,<.>/?:;'"[]{}`;

    // based on the user's input, create custom array using the character variables above 
    var selectedCharactersArray = [];
    // if passwordLowercase is true (selected by the user):
    if (passwordLowercase) {
      // then add(+=) the variable into the selectedCharactersArray:
      selectedCharactersArray += lowercaseCharacters;
    };
    if (passwordUppercase) {
      selectedCharactersArray += uppercaseCharacters;
    };
    if (passwordNumbers) {
      selectedCharactersArray += numberCharacters;
    };
    if (passwordSpecial) {
      selectedCharactersArray += specialCharacters;
    };

    // loop through the custom array created above up to the user's passwordLength input
    var passwordArray = [];
    // increment 'var i' until it reaches the user's desired passwordLength
    for (var i = 0; i < passwordLength; i++) {
      // randomly choose a character from the selectedCharacterArray using Math.floor and .random
      var randomizedCharacters = selectedCharactersArray[Math.floor(Math.random() * passwordLength)];
      passwordArray.push(randomizedCharacters);
    };  

    //  return the passwordArray value in an empty string
    return passwordArray.join("");
  };

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

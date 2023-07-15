// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Character sets
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // Function to generate a random password
  function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars) {
    var charSet = "";
    if (includeLowercase) {
      charSet += lowercaseChars;
    }
    if (includeUppercase) {
      charSet += uppercaseChars;
    }
    if (includeNumbers) {
      charSet += numberChars;
    }
    if (includeSpecialChars) {
      charSet += specialChars;
    }

    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
    }
    return password;
  }

  // Function to handle the generate button click event
  function handleGenerateButtonClick() {
    var length = 12; // default password length
    var includeLowercase = true;
    var includeUppercase = true;
    var includeNumbers = true;
    var includeSpecialChars = false;

    // Prompt the user for password criteria
    length = parseInt(prompt("Enter password length:"));
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumbers = confirm("Include numbers?");
    includeSpecialChars = confirm("Include special characters?");

    // Validate the password criteria
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Invalid password length. Please enter a number between 8 and 128.");
      return;
    }

    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
      alert("You must include at least one character type in the password.");
      return;
    }

    // Generate the password
    var password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars);

    // Display the password
    passwordText.value = password;
  }

  // Add click event listener to the generate button
  generateBtn.addEventListener("click", handleGenerateButtonClick);
}

writePassword();



var generateBtn = document.querySelector("#generate");
//Basic strings of basic characters.
var lowCases = "abcdefghijklmnopqrstuvwxyz";
var uprCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbs = "1234567890";
var specs = "!@#$%^&*()~`[]{}<>,.?/";
//More complex strings of concatenated string variables.
var lowAndupr = lowCases + uprCases;
var lowAndnumbs = lowCases + numbs;
var lowAndspecs = lowCases + specs;
var lowAnduprAndnumbs = lowAndupr + numbs;
var lowAnduprAndspecs = lowAndupr + specs;
var lowAndnumbsAndspecs = lowAndspecs + numbs;
var uprAndnumbs = uprCases + numbs;
var uprAndspecs = uprCases + specs;
var uprAndnumbsAndspecs = uprAndnumbs + specs;
var numbsAndspecs = numbs + specs;
var lowAnduprAndnumbsAndspecs = lowAndupr + numbsAndspecs;
//Function for generating password is declared.
function writePassword() {
  window.alert("Please answer the following questions.");
  //Making sure the user chooses a value within our set range of 8-128. If an invalid entry is given, the function is called again from the start.
  var charNumber = window.prompt("How many characters will your password contain? Must be at least 8 characters and no more than 128.");
  
  if(!charNumber || charNumber < 8 || charNumber > 128) {
    window.alert("Please try again and choose a value within the parameters.");
    writePassword();
    } else {
    //Validating number choice with user.
    window.confirm("You chose " + charNumber + ".");
  };
  //Series of prompts user must answer.
  var isitLowcase = window.prompt("Do you want to use lowercase letters? Type Y or N.");
  isitLowcase = isitLowcase.toUpperCase();
  var isitUppercase = window.prompt("Do you want to use uppercase letters? Type Y or N.");
  isitUppercase = isitUppercase.toUpperCase();
  var isitNumber = window.prompt("Do you want to use numbers? Type Y or N.");
  isitNumber = isitNumber.toUpperCase();
  var isitSpec = window.prompt("Do you want to use special characters? Type Y or N.");
  isitSpec = isitSpec.toUpperCase();
  //Start of huge if...else that considers the user's given entries, decides whether they are valid, and generates a password specific to the user's selected criteria.
  if(isitLowcase==="Y" && isitUppercase==="N" && isitNumber==="N" && isitSpec==="N") {
    //var passwordText = document.querySelector("#password");
    //passwordText.value = password; 
    //(Honestly not sure why these^^ were given in the starter code. Didn't use them but leaving them to figure out later.)
    var generatePassword = (charNumber, lowCases)  
    password = "";
    for (i=0; i<charNumber; i++) {
      password += lowCases.charAt(Math.floor(Math.random() * lowCases.length));
    }
    //Window.alert presents the generated password to the user in an alert.
    return window.alert("Your password is " + password + ". Thanks!");
    //The password is generated via the if else of which has had its conditions satisfied.
    } else if(isitLowcase==="Y" && isitUppercase==="Y" && isitNumber==="N" && isitSpec==="N") {
      var generatePassword = (charNumber, lowAndupr)
      password = "";
      for (i=0; i<charNumber; i++) {
        password += lowAndupr.charAt(Math.floor(Math.random() * lowAndupr.length));
      }
      return window.alert("Your password is " + password + ". Thanks!");
    } else if(isitLowcase==="Y" && isitUppercase==="Y" && isitNumber==="Y" && isitSpec==="N") {
      var generatePassword = (charNumber, lowAnduprAndnumbs)
      password = "";
      for (i=0; i<charNumber; i++) {
        password += lowAnduprAndnumbs.charAt(Math.floor(Math.random() * lowAnduprAndnumbs.length));
      }
      return window.alert("Your password is " + password + ". Thanks!");
    } else if(isitLowcase==="Y" && isitUppercase==="Y" && isitNumber==="Y" && isitSpec==="Y") {
      var generatePassword = (charNumber, lowAnduprAndnumbsAndspecs)
      password = "";
      for (i=0; i<charNumber; i++) {
        password += lowAnduprAndnumbsAndspecs.charAt(Math.floor(Math.random() * lowAnduprAndnumbsAndspecs.length));
      }
      return window.alert("Your password is " + password + ". Thanks!");
    } else if(isitLowcase==="Y" && isitUppercase==="Y" && isitNumber==="N" && isitSpec==="Y") {
        var generatePassword = (charNumber, lowAnduprAndspecs)
        password = "";
        for (i=0; i<charNumber; i++) {
          password += lowAnduprAndspecs.charAt(Math.floor(Math.random() * lowAnduprAndspecs.length));
        }
        return window.alert("Your password is " + password + ". Thanks!"); 
    } else if(isitLowcase==="N" && isitUppercase==="Y" && isitNumber==="N" && isitSpec==="N") {
      var generatePassword = (charNumber, uprCases)
      password = "";
      for (i=0; i<charNumber; i++) {
        password += uprCases.charAt(Math.floor(Math.random() * uprCases.length));
      }
      return window.alert("Your password is " + password + ". Thanks!");
    } else if(isitLowcase==="N" && isitUppercase==="Y" && isitNumber==="Y" && isitSpec==="N") {
      var generatePassword = (charNumber, uprAndnumbs)
      password = "";
      for (i=0; i<charNumber; i++) {
        password += uprAndnumbs.charAt(Math.floor(Math.random() * uprAndnumbs.length));
      }
      return window.alert("Your password is " + password + ". Thanks!");
    } else if(isitLowcase==="N" && isitUppercase==="Y" && isitNumber==="N" && isitSpec==="Y") {
      var generatePassword = (charNumber, uprAndspecs)
      password = "";
      for (i=0; i<charNumber; i++) {
        password += uprAndspecs.charAt(Math.floor(Math.random() * uprAndspecs.length));
      }
      return window.alert("Your password is " + password + ". Thanks!");
    } else if(isitLowcase==="N" && isitUppercase==="Y" && isitNumber==="Y" && isitSpec==="Y") {
      var generatePassword = (charNumber, uprAndnumbsAndspecs)
      password = "";
      for (i=0; i<charNumber; i++) {
        password += uprAndnumbsAndspecs.charAt(Math.floor(Math.random() * uprAndnumbsAndspecs.length));
      }
      return window.alert("Your password is " + password + ". Thanks!");
    } else if(isitLowcase==="N" && isitUppercase==="N" && isitNumber==="Y" && isitSpec==="N") {
      var generatePassword = (charNumber, numbs)
      password = "";
      for (i=0; i<charNumber; i++) {
        password += numbs.charAt(Math.floor(Math.random() * numbs.length));
      }
      return window.alert("Your password is " + password + ". Thanks!");
    } else if(isitLowcase==="N" && isitUppercase==="N" && isitNumber==="Y" && isitSpec==="Y") {
      var generatePassword = (charNumber, numbsAndspecs)
      password = "";
      for (i=0; i<charNumber; i++) {
        password += numbsAndspecs.charAt(Math.floor(Math.random() * numbsAndspecs.length));
      }
      return window.alert("Your password is " + password + ". Thanks!");
    } else if(isitLowcase==="N" && isitUppercase==="N" && isitNumber==="N" && isitSpec==="Y") {
      var generatePassword = (charNumber, specs)
      password = "";
      for (i=0; i<charNumber; i++) {
        password += specs.charAt(Math.floor(Math.random() * specs.length));
      }
      return window.alert("Your password is " + password + ". Thanks!");
    } else if(isitLowcase==="Y" && isitUppercase==="N" && isitNumber==="Y" && isitSpec==="Y") {
      var generatePassword = (charNumber, lowAndnumbsAndspecs)
      password = "";
      for (i=0; i<charNumber; i++) {
        password += lowAndnumbsAndspecs.charAt(Math.floor(Math.random() * lowAndnumbsAndspecs.length));
      }
      return window.alert("Your password is " + password + ". Thanks!");
    } else if(isitLowcase==="Y" && isitUppercase==="N" && isitNumber==="N" && isitSpec==="Y") {
      var generatePassword = (charNumber, lowAndspecs)
      password = "";
      for (i=0; i<charNumber; i++) {
        password += lowAndspecs.charAt(Math.floor(Math.random() * lowAndspecs.length));
      }
      return window.alert("Your password is " + password + ". Thanks!");
    } else if(isitLowcase==="Y" && isitUppercase==="N" && isitNumber==="Y" && isitSpec==="N") {
      var generatePassword = (charNumber, lowAndnumbs)
      password = "";
      for (i=0; i<charNumber; i++) {
        password += lowAndnumbs.charAt(Math.floor(Math.random() * lowAndnumbs.length));
      }
      return window.alert("Your password is " + password + ". Thanks!");
      //If a value other than Y or N is entered, user gets a message explaining user error and function returns nothing. Function is not called again until generateBtn is cliked again.
    } else {
      window.alert("Be sure to only type Y or N and fulfill at least one of the criteria.")
      
    } return;
  }
  
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
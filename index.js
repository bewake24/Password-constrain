var inputpass = document.getElementById("pass");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var specialchar = document.getElementById("specialchar");

inputpass.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(inputpass.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(inputpass.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(inputpass.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

    // Validate special characters
    var special = /[!@#$%^&*]/g;
    if(inputpass.value.match >= 8) {
      specialchar.classList.remove("invalid");
      specialchar.classList.add("valid");
    } else {
      specialchar.classList.remove("valid");
      specialchar.classList.add("invalid");
    }

  // Validate length
  if(inputpass.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

}

// Validating password and confirm password
document.querySelector("#signup").addEventListener("click", checkPassword);
function checkPassword(form) {
  password = form.password.value;
  confirmpassword = form.confirmpassword.value;
  if (password != confirmpassword) {
    alert("Password didn't match. Password and confirm password must be same");
    return false;
  }
  else{
    alert("Successful, You will be redirected to .....");
    return true;
  }
}
